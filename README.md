# Talal International School Website

![Talal Schools Logo](src/static/img/TalalSchoolLogoSqr@0.25x.png)

This is the official source code repository for the Talal International School website. The site is a modern, single-page application designed to provide comprehensive information to prospective students and parents.

## ✨ Features

- **Fully Responsive Design**: Looks great on desktops, tablets, and mobile devices.
- **Smooth Animations**: Engaging animations on scroll and hover to enhance user experience.
- **Detailed Information Sections**:
  - About Us: School history, identity, and mission.
  - Curriculum: Details on the British curriculum offered.
  - Admissions & Fees: Comprehensive breakdown of tuition, discounts, and other fees.
  - Facilities: Showcase of the school's modern facilities.
  - Contact: Easy access to contact information and location.
- **Optimized for Performance**: Built with a production-ready pipeline that minifies HTML, CSS, and JavaScript for fast loading times.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks**: [Bootstrap 5](https://getbootstrap.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Build Tools**:
  - [npm](https://www.npmjs.com/) (Node Package Manager)
  - [http-server](https://www.npmjs.com/package/http-server) for local development
  - [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run multiple scripts
  - [rimraf](https://www.npmjs.com/package/rimraf) for cleaning build directories
  - [terser](https://terser.org/) for JavaScript minification
  - [clean-css-cli](https://www.npmjs.com/package/clean-css-cli) for CSS minification
  - [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser) for HTML minification
- **Code Quality**:
  - [CSpell](https://www.npmjs.com/package/cspell) for spell checking

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) must be installed on your system.

### Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/wwwtalal/website_talalschool.com.git
    cd website_talalschool.com
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local server at `http://localhost:5000` and automatically open it in your default browser. The command also runs a spell checker.

## 📦 Build Process

To create an optimized version of the site for production, run the build command:

```bash
npm run build
```

This script will:
1.  Clean the `docs/` directory.
2.  Copy all necessary assets (fonts, images, favicon, CNAME).
3.  Minify the HTML, CSS, and JavaScript files.
4.  Place the final, optimized site into the `docs/` directory, ready for deployment.
5.  Serve the built site at `http://localhost:8088`.

## 📄 License

This project is under a restrictive license. See the `LICENSE` file for details. All rights are reserved.

---

For more information about the school, please visit the live website.