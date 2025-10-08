# Post-Restructuring Checklist

## Immediate Actions Required

- [ ] Replace profile picture at `assets/img/prof_pic.jpg` with your own photo
- [ ] Review all content in `_pages/about.md` for accuracy
- [ ] Verify email address (currently: v.ruffo@fs.de)
- [ ] Verify LinkedIn username (currently: vittoriomariaruffo)

## Content to Review

- [ ] Check teaching experience dates and course names
- [ ] Verify coauthor information in `_data/coauthors.yml`
- [ ] Review research paper abstracts in `_bibliography/papers.bib`
- [ ] Confirm presentation locations and dates
- [ ] Update CV PDF if needed (current version: October 2025)

## Optional Enhancements

- [ ] Add Google Scholar ID to `_data/socials.yml` if available
- [ ] Add ORCID ID if available
- [ ] Add GitHub username if you want to share code repositories
- [ ] Create a custom 404 page with relevant content
- [ ] Add news items for recent achievements (in `_news/` if you uncomment it in `_config.yml`)
- [ ] Add photos/images to illustrate research or teaching

## Website Configuration

- [ ] Update `url` in `_config.yml` if different from `https://vittorioruffo.github.io`
- [ ] Set up Google Analytics if desired (update `google_analytics` in `_config.yml`)
- [ ] Consider enabling newsletter if you want to build a mailing list

## Before Deploying

- [ ] Test website locally using `docker compose up`
- [ ] Check all links work correctly
- [ ] Verify CV PDF downloads properly
- [ ] Test on mobile devices (responsive design)
- [ ] Check dark mode appearance

## After Deploying

- [ ] Share website link with advisor and colleagues for feedback
- [ ] Add website to email signature
- [ ] Update LinkedIn profile with website link
- [ ] Submit to academic search engines if desired

## Regular Maintenance

- [ ] Update research papers as they progress through stages
- [ ] Add new presentations and conferences
- [ ] Update teaching experience each semester
- [ ] Keep CV PDF synchronized with the website content
- [ ] Check for broken links periodically

## Notes

- The website uses the al-folio Jekyll theme
- Content updates don't require coding - just edit Markdown and YAML files
- CV can be updated by editing `_data/cv.yml`
- Research papers are managed in `_bibliography/papers.bib`
- For theme updates, see `INSTALL.md` section on "Upgrading from a previous version"
