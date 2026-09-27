# DevPath — Mzansi Code Learning Platform

DevPath is a beginner-friendly e-learning platform that teaches coding through practical, South African-inspired lessons. Each concept connects everyday Mzansi experiences to proper computer-science terms, working code, and interactive examples.

## Features

- **11 Interactive Concept Pages** — variables, functions, conditionals, loops, exceptions, libraries, unit tests, file I/O, regex, OOP, and data structures
- **Progress Tracking** — visual progress bar tracks completed lessons (saved in localStorage)
- **Dark Theme** — toggle between light and dark modes
**Language Toggle** — switch between English, isiZulu, Setswana, and Afrikaans UI labels
- **Responsive Design** — works on desktop, tablet, and mobile
- **Build System** — assembles pages from partials for maintainability

## Quick Start

```bash
# Build the site (assembles partials into final HTML)
npm run build

# Serve locally
npm run serve
# Then open http://localhost:8080
```

## Project Structure

```
DevPath/
├── index.html              # Home page
├── 404.html                # Custom 404 page
├── build.js                # Build script (assembles partials)
├── package.json
├── partials/
│   ├── header.html         # Shared <head> + nav
│   └── footer.html         # Shared footer + scripts
├── concepts/
│   ├── index.html          # Concepts landing page
│   ├── variables.html      # 🏪 The Spaza Stash
│   ├── functions.html      # 🍲 The Pap Recipe
│   ├── conditionals.html   # 🧍 Taxi or Walk?
│   ├── loops.html          # 🍳 Fry Until the Pot is Empty
│   ├── exceptions.html     # 🔌 Load Shedding Survival
│   ├── libraries.html      # 🌶️ Don't Grind It, Import It
│   ├── unit-tests.html     # 🥘 Tasting the Potjie
│   ├── file-io.html        # 📒 The Spaza Notebook
│   ├── regex.html         # 🔍 CV Skena (Regex)
│   ├── oop.html            # 🚐 The Kombi Blueprint
│   └── data-structures.html # 🧱 The Kasi Line Up
└── static/
    ├── style.css           # Main stylesheet (all styles)
    ├── language.js         # Theme, progress, i18n logic
    ├── variables.js        # Variables lesson interactivity
    ├── functions.js        # Functions lesson interactivity
    ├── conditionals.js     # Conditionals lesson interactivity
    ├── loops.js            # Loops lesson interactivity
    ├── exceptions.js       # Exceptions lesson interactivity
    ├── libraries.js        # Libraries lesson interactivity
    ├── unit-tests.js       # Unit tests lesson interactivity
    ├── file-io.js          # File I/O lesson interactivity
    ├── regex.js           # Regex lesson interactivity
    ├── oop.js              # OOP lesson interactivity
    └── data-structures.js  # Data structures lesson interactivity
```

## Technologies

- HTML5, CSS3, Vanilla JavaScript
- Node.js (build script only)
- No frameworks, no dependencies — pure static site

## License

Created for educational purposes.
