# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog,
and this project adheres to Semantic Versioning.

## [Unreleased]

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
