# Website Restructuring Summary

## Overview
The website has been successfully restructured based on Vittorio Maria Ruffo's CV and following the design principles of academic portfolio websites similar to https://turalkarimli.github.io/.

## Key Changes Made

### 1. Personal Information Updates

#### `_config.yml`
- Updated name: Vittorio Maria Ruffo
- Updated description for PhD student in Finance at Frankfurt School
- Changed keywords to: finance, asset pricing, volatility, machine learning, PhD, research
- Updated scholar information for bibliography
- Updated icon to 📊

#### `_data/socials.yml`
- Email: v.ruffo@fs.de
- LinkedIn: vittoriomariaruffo
- Removed demo social media links

### 2. CV and Academic Information

#### `_data/cv.yml`
- **Education**: PhD at Frankfurt School, Masters from Collegio Carlo Alberto and University of Verona, Bachelor from University of Verona
- **Working Papers**: Factor Dispersions (with CBOE Research Grant award)
- **Work in Progress**: 2 additional research projects
- **Presentations**: 3 conferences listed (2024-2025)
- **Teaching Experience**: Detailed teaching positions at Frankfurt School and University of Verona
- **Scholarships**: Doctoral Scholarship (2022), Merit-based full tuition waiver (2021)
- **Computer Skills**: Advanced in Python, Matlab, LaTeX; Good in R, Stata; Basic in Java, VBA, SQL

#### `_pages/cv.md`
- Linked to the actual CV PDF: `CV_VittorioRuffo.pdf`
- PDF copied from `_data/` to `assets/pdf/` directory
- Updated navigation order to 3

### 3. Research Publications

#### `_bibliography/papers.bib`
- Added working paper: "Factor Dispersions" with coauthors (D. Gerchik, L. Schoenleber, G. Vilkov)
- Included CBOE Research Grant award information
- Added work in progress papers:
  - "Market Efficiency in Prediction Markets - A Comparison with Derivatives"
  - "Firm-level News Networks"

#### `_data/coauthors.yml`
- Updated with Vittorio's actual coauthors
- Added Prof. Grigory Vilkov's profile link

#### `_data/venues.yml`
- Updated with finance-relevant venues (JF, JFE, RFS)
- Added colors for Working Paper and Work in Progress categories

### 4. About Page (`_pages/about.md`)

- Updated subtitle: "PhD Student in Finance at Frankfurt School of Finance & Management"
- Added office address: Adickesallee 32-34, 60322 Frankfurt am Main, Germany
- Created comprehensive bio including:
  - Research interests (asset pricing, volatility, machine learning)
  - Current research projects
  - Educational background
  - Teaching passion
- Enabled selected papers display

### 5. Teaching Page (`_pages/teaching.md`)

Organized by institution:

**Frankfurt School of Finance & Management**
- Lecturer: Corporate Finance (2026), Python Bootcamp (2025-present)
- TA: Financial Products & Modelling, Corporate Finance (2024-present)
- TA: Portfolio Management (2023)
- RA: Quantitative Asset Management (2024)

**University of Verona**
- Teacher: Data Analysis Laboratory with R (2022)
- TA: Financial Econometrics, Statistics, Business Management (2020-2021)

### 6. Publications Page (`_pages/publications.md`)

- Renamed title from "publications" to "research"
- Updated description: "Working papers and research in progress"
- Maintained nav_order: 2

### 7. Navigation Structure

The navigation bar now displays (in order):
1. **about** (homepage at `/`)
2. **research** (nav_order: 2)
3. **cv** (nav_order: 3)
4. **teaching** (nav_order: 4)

Hidden from navigation:
- blog (disabled, all posts excluded)
- projects (disabled, all projects excluded)
- repositories (disabled)
- news (excluded)
- books (excluded)
- profiles (excluded)

### 8. Content Cleanup

Following best practices from `CUSTOMIZE.md`, the following demo content was excluded in `_config.yml` rather than deleted:
- `_posts/` (all blog posts)
- `_news/` (all news items)
- `_projects/` (all project demos)
- `_books/` (bookshelf)
- Various demo pages (about_einstein.md, profiles.md, repositories.md, blog.md, books.md, news.md)

This approach avoids merge conflicts when updating the theme in the future.

### 9. Configuration Adjustments

- Disabled pagination (not needed without blog)
- Disabled related blog posts
- Disabled masonry layout (not needed without projects)
- Disabled project categories
- Removed demo GitHub repositories from `_data/repositories.yml`
- Removed `assets/json/resume.json` to ensure `cv.yml` is used

## Profile Picture

The website references `prof_pic.jpg` in the `assets/img/` directory. A default image exists, but you should replace it with your own professional photo.

## Next Steps

1. **Replace Profile Picture**: Add your photo as `assets/img/prof_pic.jpg`
2. **Verify Information**: Review all content to ensure accuracy
3. **Add More Details**: Consider adding more information to the about page
4. **Update Research**: Keep the bibliography updated as research progresses
5. **Deploy**: Follow the deployment instructions in `INSTALL.md`

## File Structure

Key files modified:
```
/_config.yml                    # Main configuration
/_data/
  ├── cv.yml                    # CV content
  ├── socials.yml               # Contact information
  ├── coauthors.yml             # Research collaborators
  └── venues.yml                # Publication venues
/_pages/
  ├── about.md                  # Homepage/bio
  ├── publications.md           # Research page
  ├── cv.md                     # CV page
  └── teaching.md               # Teaching experience
/_bibliography/
  └── papers.bib                # Research publications
/assets/pdf/
  └── CV_VittorioRuffo.pdf     # CV PDF download
```

## Testing

To test the website locally:
```bash
docker compose up
```

Then visit `http://localhost:8080` in your browser.

## Notes

- All changes follow the al-folio theme documentation
- The website is now optimized for an academic finance researcher
- Content is cleanly separated for easy updates
- The design follows modern academic website best practices

---

Last updated: October 8, 2025