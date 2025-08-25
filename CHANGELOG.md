# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog,
and this project adheres to Semantic Versioning.

## [Unreleased]

## [1.1.0] - 2025-08-25

### Added
- **Scrollspy**: Implemented Bootstrap's Scrollspy to highlight the active navigation link based on scroll position.

### Changed
- **Fees Section**: Refactored the multiple fee tables into a single, collapsible Bootstrap accordion for improved user experience.
- **Build Process**: Updated minification scripts to remove all comments, including license headers, from production CSS and JS files.
- **SEO**: Enhanced structured data with social links and opening hours, and improved footer link accessibility for screen readers.

### Fixed
- **Scrollspy**: Corrected highlighting inaccuracy by synchronizing CSS offsets with the navbar height.
- **Build Process**: Corrected `cleancss` command-line option from `--level` to `-O2`.
- Corrected CSS and JavaScript paths in `index.html` to ensure they load correctly with the development server.
- Corrected the logo image path in the navigation bar.
- Merged bootstrap css to custom css, and bootstrap js to custom js

## [1.0.0] - 2025-08-24

### Added
- Logo glow effect on load and hover.
- Added spell checker for dev and build process.
- Added detailed information cards to the "About Us" section covering foundation, identity, educators, and mission.
- Created a maintenance page for use during site updates, hidden in configs folder.
- Added `README.md` and `LICENSE` files to the project.

### Changed
- **Build Process:**
  - Created a `configs` folder for configuration files.
  - Moved the `CNAME` file into `configs/github/` and updated scripts.
  - Moved favicon.ico from img to root of src and also to be at root of build.
- **Code Structure:**
  - Separated custom CSS from `index.html` into `/static/css/styles.css`.
  - Separated custom JavaScript from `index.html` into `/static/js/scripts.js`.
  - Added powered by Emaxer to the end of the page.
  - Improved styling for the "Powered by" link in the footer.
- **Project Management:**
  - Established a formal `CHANGELOG.md` to track project history.

### Fixed
- Corrected typographical errors and duplicated words in page content.
- Fixed hero section animation conflict that caused jerky behavior on mobile devices.
- Updated CSpell configuration to check the `LICENSE` file.
- Corrected license inconsistency between `README.md` and the `LICENSE` file.

### Removed
- Deleted temporary HTML design files from the `src` directory.
- Removed redundant `LICENSE.md` file in favor of the standard `LICENSE` file.
