const status = document.getElementById("viewerStatus");
const container = document.getElementById("viewerContainer");
const controls = document.querySelectorAll(".pdf-toolbar button, .pdf-toolbar input, .pdf-toolbar select");

async function loadCV() {
  const libraryURL = new URL("../lib/pdfjs/6.4.299/", import.meta.url);
  const pdfjs = await import(new URL("pdf.mjs", libraryURL));
  const { EventBus, PDFLinkService, PDFViewer } = await import(new URL("pdf_viewer.mjs", libraryURL));
  pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdf.worker.mjs", libraryURL).href;

  const parameters = new URLSearchParams(window.location.search);
  const file = parameters.get("file");
  if (!file) throw new Error("No PDF was specified.");
  const pdfURL = new URL(file, window.location.href);
  if (pdfURL.origin !== window.location.origin) throw new Error("The PDF must be hosted on this website.");
  if (parameters.has("v")) pdfURL.searchParams.set("v", parameters.get("v"));

  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2, externalLinkRel: "noopener noreferrer" });
  const viewer = new PDFViewer({
    container,
    eventBus,
    linkService,
    textLayerMode: 1,
    annotationMode: pdfjs.AnnotationMode.ENABLE,
    imageResourcesPath: new URL("images/", libraryURL).href,
  });
  linkService.setViewer(viewer);

  const pageNumber = document.getElementById("pageNumber");
  const pageCount = document.getElementById("pageCount");
  const previousPage = document.getElementById("previousPage");
  const nextPage = document.getElementById("nextPage");
  const zoomLevel = document.getElementById("zoomLevel");
  const customZoom = zoomLevel.querySelector('[value="custom"]');

  function updatePageControls() {
    pageNumber.value = viewer.currentPageNumber;
    previousPage.disabled = viewer.currentPageNumber <= 1;
    nextPage.disabled = viewer.currentPageNumber >= viewer.pagesCount;
  }

  eventBus.on("pagesinit", () => {
    viewer.currentScaleValue = "page-width";
    pageNumber.max = viewer.pagesCount;
    pageCount.textContent = viewer.pagesCount;
    controls.forEach((control) => { control.disabled = false; });
    updatePageControls();
  });
  eventBus.on("pagechanging", updatePageControls);
  eventBus.on("pagerendered", () => {
    status.hidden = true;
    container.setAttribute("aria-busy", "false");
  });
  eventBus.on("scalechanging", ({ scale, presetValue }) => {
    if (presetValue === "page-width" || presetValue === "page-fit") {
      zoomLevel.value = presetValue;
    } else {
      customZoom.textContent = `${Math.round(scale * 100)}%`;
      zoomLevel.value = "custom";
    }
  });

  previousPage.addEventListener("click", () => { viewer.currentPageNumber -= 1; });
  nextPage.addEventListener("click", () => { viewer.currentPageNumber += 1; });
  pageNumber.addEventListener("change", () => {
    const requestedPage = Number(pageNumber.value);
    if (Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= viewer.pagesCount) {
      viewer.currentPageNumber = requestedPage;
    }
    updatePageControls();
  });
  document.getElementById("zoomOut").addEventListener("click", () => viewer.decreaseScale());
  document.getElementById("zoomIn").addEventListener("click", () => viewer.increaseScale());
  zoomLevel.addEventListener("change", () => {
    if (zoomLevel.value !== "custom") viewer.currentScaleValue = zoomLevel.value;
  });

  // Fit presets must be recalculated when a phone rotates or the frame resizes.
  new ResizeObserver(() => {
    const preset = viewer.currentScaleValue;
    if (preset === "page-width" || preset === "page-fit") viewer.currentScaleValue = preset;
  }).observe(container);

  const loadingTask = pdfjs.getDocument({
    url: pdfURL.href,
    cMapUrl: new URL("cmaps/", libraryURL).href,
    cMapPacked: true,
    standardFontDataUrl: new URL("standard_fonts/", libraryURL).href,
    wasmUrl: new URL("wasm/", libraryURL).href,
    isEvalSupported: false,
  });
  const pdf = await loadingTask.promise;
  viewer.setDocument(pdf);
  linkService.setDocument(pdf);
}

loadCV().catch(() => {
  controls.forEach((control) => { control.disabled = true; });
  status.hidden = false;
  status.textContent = "The CV preview could not load. Use Open PDF or Download CV above.";
  status.setAttribute("role", "alert");
  container.setAttribute("aria-busy", "false");
});
