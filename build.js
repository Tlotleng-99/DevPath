#!/usr/bin/env node
/**
 * DevPath Build Script
 * Assembles complete HTML pages from partials + content.
 * Output goes to root level — ready to push and deploy.
 * 
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const PARTIALS = path.join(SRC, 'partials');
const CONCEPTS = path.join(SRC, 'concepts');

// Read partials
const headerTemplate = fs.readFileSync(path.join(PARTIALS, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(PARTIALS, 'footer.html'), 'utf8');

/**
 * Replace template variables in a string
 */
function render(template, vars) {
    let result = template;
    for (const [key, value] of Object.entries(vars)) {
        result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    }
    return result;
}

/**
 * Build a concept page → writes to root concepts/ directory
 */
function buildConceptPage(filename, title, description, extraScripts) {
    const contentPath = path.join(CONCEPTS, filename);
    const content = fs.readFileSync(contentPath, 'utf8');
    
    const isIndex = filename === 'index.html';
    const homePath = isIndex ? '../' : '../../';
    const cssPath = isIndex ? '../static/' : '../../static/';
    const jsPath = isIndex ? '../static/' : '../../static/';
    const conceptsPath = isIndex ? '' : '../';
    
    const header = render(headerTemplate, {
        TITLE: title,
        DESCRIPTION: description,
        PAGE_TYPE: 'concepts',
        HOME_PATH: homePath,
        CONCEPTS_PATH: conceptsPath,
        CSS_PATH: cssPath
    });
    
    const footer = render(footerTemplate, {
        JS_PATH: jsPath,
        EXTRA_SCRIPTS: extraScripts || ''
    });
    
    const output = header + content + footer;
    const outPath = path.join(ROOT, 'concepts', filename);
    fs.writeFileSync(outPath, output);
    console.log(`✓ Built concepts/${filename}`);
}

// Build concept index
buildConceptPage('index.html', 'Coding Concepts', 'Learn coding concepts the Mzansi way', '');

// Build individual concept pages
const conceptPages = [
    { file: 'variables.html', title: 'The Spaza Stash', desc: 'Understand variables and how values move through a program', script: '<script src="../../static/variables.js"></script>' },
    { file: 'functions.html', title: 'The Pap Recipe', desc: 'Group logic into reusable functions', script: '<script src="../../static/functions.js"></script>' },
    { file: 'conditionals.html', title: 'Taxi or Walk?', desc: 'Use conditionals to make decisions', script: '<script src="../../static/conditionals.js"></script>' },
    { file: 'loops.html', title: 'Fry Until the Pot is Empty', desc: 'Repeat work without copying code', script: '<script src="../../static/loops.js"></script>' },
    { file: 'exceptions.html', title: 'Load Shedding Survival', desc: 'Handle errors gracefully', script: '<script src="../../static/exceptions.js"></script>' },
    { file: 'libraries.html', title: "Don't Grind It, Import It", desc: 'Use libraries to save time', script: '<script src="../../static/libraries.js"></script>' },
    { file: 'unit-tests.html', title: 'Tasting the Potjie', desc: 'Write tests to verify your code', script: '<script src="../../static/unit-tests.js"></script>' },
    { file: 'file-io.html', title: 'The Spaza Notebook', desc: 'Read and write files', script: '<script src="../../static/file-io.js"></script>' },
    { file: 'regex.html', title: 'CV Skena (Regex)', desc: 'Pattern matching with regex', script: '<script src="../../static/regex.js"></script>' },
    { file: 'oop.html', title: 'The Kombi Blueprint', desc: 'Model real-world systems with OOP', script: '<script src="../../static/oop.js"></script>' },
    { file: 'data-structures.html', title: 'The Kasi Line Up', desc: 'Organise data efficiently', script: '<script src="../../static/data-structures.js"></script>' },
    { file: 'recursion.html', title: 'The Matryoshka Method', desc: 'Functions that call themselves', script: '<script src="../../static/recursion.js"></script>' },
    { file: 'arrays.html', title: 'The Spaza Shelves', desc: 'Ordered lists with indexed access', script: '<script src="../../static/arrays.js"></script>' },
    { file: 'dictionaries.html', title: 'The Spaza Price List', desc: 'Key-value pairs for fast lookup', script: '<script src="../../static/dictionaries.js"></script>' },
];

for (const page of conceptPages) {
    buildConceptPage(page.file, page.title, page.desc, page.script);
}

// Build root index.html from partials
const homeContent = fs.readFileSync(path.join(SRC, 'home-content.html'), 'utf8');
const homeHeader = render(headerTemplate, {
    TITLE: 'DevPath | Mzansi Code Learning',
    DESCRIPTION: 'DevPath is a beginner-friendly coding learning platform with practical lessons, progress tracking, and a connected path through core programming concepts.',
    PAGE_TYPE: 'home',
    HOME_PATH: '',
    CONCEPTS_PATH: 'concepts/',
    CSS_PATH: 'static/'
});
const homeFooter = render(footerTemplate, {
    JS_PATH: 'static/',
    EXTRA_SCRIPTS: ''
});
fs.writeFileSync(path.join(ROOT, 'index.html'), homeHeader + homeContent + homeFooter);
console.log('✓ Built index.html');

// Build 404.html
const notFoundContent = fs.readFileSync(path.join(SRC, '404-content.html'), 'utf8');
const notFoundHeader = render(headerTemplate, {
    TITLE: 'Page not found',
    DESCRIPTION: 'The page you were looking for does not exist or may have moved.',
    PAGE_TYPE: '404',
    HOME_PATH: '',
    CONCEPTS_PATH: 'concepts/',
    CSS_PATH: 'static/'
});
const notFoundFooter = render(footerTemplate, {
    JS_PATH: 'static/',
    EXTRA_SCRIPTS: ''
});
fs.writeFileSync(path.join(ROOT, '404.html'), notFoundHeader + notFoundContent + notFoundFooter);
console.log('✓ Built 404.html');

console.log('\n✓ Build complete! Push to deploy.');
