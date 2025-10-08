# Research Page Customization Guide

Your research page automatically generates from your `_bibliography/papers.bib` file using a custom layout.

## Location
- Bibliography file: `_bibliography/papers.bib`
- Publications page: `_pages/publications.md`
- Custom layout: `_layouts/bib-research.liquid`
- Images folder: `assets/img/research/`

## How It Works

The research page automatically reads your papers from `papers.bib` and displays them using the custom research template. Just edit your `.bib` file and the page updates automatically!

## BibTeX Custom Fields

Add these custom fields to your BibTeX entries in `_bibliography/papers.bib`:

### Required Fields
```bibtex
@unpublished{yourkey2024,
  title={Your Paper Title},
  author={Ruffo, Vittorio Maria and Coauthor Name and Another Name},
  year={2024},
  paper_number={1},  % The [1], [2], [3] number before the title
}
```

### Optional Fields

```bibtex
@unpublished{yourkey2024,
  % ... required fields ...
  
  % Abstract (leave empty to hide)
  abstract={Your paper abstract goes here. This will be shown in a collapsible section.},
  
  % Preview image (place in assets/img/research/)
  preview={paper1.png},
  
  % Conference presentations (separate with semicolons)
  conferences={EFA 2025; AFA 2024; WFA 2024},
  
  % Award information
  award={Full award text here},
  award_name={Short Award Name},  % Shows on the badge
  
  % Links
  ssrn={https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1234567},  % SSRN link
  pdf={paper.pdf},           % Place PDF in assets/pdf/
  slides={slides.pdf},       % Place slides in assets/pdf/
  code={https://github.com/yourrepo},  % External URL
  
  % Audio summary (optional)
  audio={paper1-summary.mp3},  % Place in assets/audio/
  
  % Standard fields
  note={Working Paper},
  abbr={Working Paper},
  bibtex_show={true},
  selected={true}
}
```

## Example Entry

Here's a complete example:

```bibtex
@unpublished{ruffo2024factor,
  abbr={Working Paper},
  bibtex_show={true},
  title={Factor Dispersions},
  author={Ruffo, Vittorio Maria and Gerchik, D. and Schoenleber, L. and Vilkov, Grigory},
  year={2024},
  note={Working Paper},
  abstract={This paper investigates factor dispersions in financial markets and their implications for portfolio construction.},
  selected={true},
  award={Winner of the CBOE-The Options Institute-S&P Dow Jones Indices Dispersion Research Grant},
  award_name={CBOE Research Grant},
  paper_number={1},
  preview={paper1.png},
  conferences={},
  ssrn={https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4853747},
  pdf={factor_dispersions.pdf},
  slides={factor_dispersions_slides.pdf}
}
```

## Step-by-Step Customization

### 1. Edit Your Papers

Open `_bibliography/papers.bib` and update each entry:
- Fill in the `abstract` field with your abstract
- Update `conferences` with your conference presentations
- Set `paper_number` to control ordering ([1], [2], [3], etc.)

### 2. Add Paper Images

Place your paper images in `assets/img/research/`:
- Name them as referenced in the `preview` field (e.g., `paper1.png`)
- Recommended size: 400x300 pixels or similar aspect ratio
- Supported formats: PNG, JPG, GIF

### 3. Add PDFs and Slides (Optional)

If you have PDFs or slides:
- Create `assets/pdf/` folder if it doesn't exist
- Add your files there
- Reference them in the `pdf` and `slides` fields

### 4. Add Audio Summaries (Optional)

If you have podcast-style summaries:
- Create `assets/audio/` folder if it doesn't exist
- Add your MP3 files there
- Reference them in the `audio` field

### 5. Configure Coauthor Links (Optional)

To add links to coauthor websites:
- Edit `_data/coauthors.yml`
- Add entries like:

```yaml
gerchik:
  - firstname: [D., David]
    url: https://example.com/gerchik

vilkov:
  - firstname: [Grigory]
    url: https://example.com/vilkov
```

## Adding New Papers

To add a new paper, simply add a new BibTeX entry to `_bibliography/papers.bib`:

```bibtex
@unpublished{yourkey2025,
  title={Your New Paper Title},
  author={Ruffo, Vittorio Maria and Coauthor Name},
  year={2025},
  note={Working Paper},
  abstract={Your abstract here},
  paper_number={4},
  preview={paper4.png},
  conferences={Conference 2025}
}
```

## Features

✅ **Automatic Generation** - Page updates when you edit `papers.bib`  
✅ **Collapsible Abstracts** - Click "Abstract ▼" to expand/collapse  
✅ **Conference Tags** - Automatically styled from the `conferences` field  
✅ **Award Badges** - Automatically displayed from `award` field  
✅ **Coauthor Links** - Links to coauthor websites (if configured)  
✅ **Paper Links** - PDF, Slides, Code buttons  
✅ **Audio Summaries** - Support for podcast-style summaries  
✅ **Responsive Design** - Works on desktop and mobile  
✅ **Theme Integration** - Colors inherit from your site theme  

## Ordering Papers

Papers are displayed in the order they appear in `papers.bib`. The `paper_number` field controls the `[1]`, `[2]`, `[3]` labels but doesn't affect order.

To reorder papers, simply rearrange them in the `.bib` file.

## Preview Your Changes

To preview:
1. Run `bundle exec jekyll serve` in your terminal
2. Open `http://localhost:4000/research/` in your browser
3. Edit `papers.bib` and refresh to see changes

## Dynamic Content Features

The page automatically hides sections when they are empty:

- **Empty Abstracts** - If `abstract={}` is empty, the entire abstract section (including toggle) is hidden
- **Empty Conferences** - If `conferences={}` is empty, the "Selected Conferences:" section is hidden
- **No Award** - If `award` is not set, the award badge is hidden
- **No Links** - SSRN/PDF/Slides/Code buttons only appear if those fields are set
- **No Audio** - Audio player only appears if `audio` field is set

This keeps your page clean - only showing relevant information for each paper.

## Tips

- Leave `abstract={}` empty to hide the abstract section for work-in-progress papers
- Leave `conferences={}` empty and the entire conference section will be hidden
- Use semicolons (`;`) to separate multiple conferences: `conferences={EFA 2025; AFA 2024; WFA 2024}`
- Images make the page more visually appealing - try to add one for each paper
- The system automatically excludes you from the author list and shows "with [coauthors]"
- Conference tags use a monospace font to match the template style
- The layout automatically adapts to mobile devices
