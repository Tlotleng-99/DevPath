document.addEventListener('DOMContentLoaded', () => {
    // --- Year ---
    const yearNode = document.getElementById('year');
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    // --- Theme Toggle ---
    const body = document.body;
    const key = 'devpath-theme';
    const savedTheme = localStorage.getItem(key);

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-theme');
            localStorage.setItem(key, isDark ? 'dark' : 'light');
        });
    }

    // --- Progress Tracker ---
    const progressKey = 'devpath-progress';
    let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');

    // Mark current page as visited
    const pageId = body.dataset.pageId || location.pathname;
    if (!progress[pageId]) {
        progress[pageId] = { visited: true, timestamp: Date.now() };
        localStorage.setItem(progressKey, JSON.stringify(progress));
    }

    // Update progress indicators
    document.querySelectorAll('[data-progress]').forEach(el => {
        const lessonId = el.dataset.progress;
        if (progress[lessonId]) {
            el.classList.add('completed');
            const check = el.querySelector('.progress-check');
            if (check) check.textContent = '✓';
        }
    });

    // Update progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const total = parseInt(progressBar.dataset.total, 10);
        const completed = Object.keys(progress).length;
        const pct = Math.round((completed / total) * 100);
        progressBar.style.width = pct + '%';
        const label = document.querySelector('.progress-label');
        if (label) label.textContent = pct + '% complete';
    }

    // --- Language Toggle ---
    const langKey = 'devpath-language';
    const savedLang = localStorage.getItem(langKey) || 'en';
    const translations = {
        en: { home: 'Home', concepts: 'Concepts', start: 'Start learning', explore: 'Explore tracks' },
        zu: { home: 'Ikhaya', concepts: 'Imiqondo', start: 'Qala ukufunda', explore: 'Hola izitimela' },
        tn: { home: 'Gae', concepts: 'Dikgopolo', start: 'Simlola go ithuta', explore: 'Ema ditsela' },
        af: { home: 'Tuis', concepts: 'Konsepte', start: 'Begin leer', explore: 'Verken spore' }
    };

    function applyLanguage(lang) {
        const t = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key]) el.textContent = t[key];
        });
    }

    applyLanguage(savedLang);

    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const langs = ['en', 'zu', 'tn', 'af'];
            const current = langs.indexOf(savedLang);
            const next = langs[(current + 1) % langs.length];
            localStorage.setItem(langKey, next);
            applyLanguage(next);
            langToggle.textContent = '🌍 ' + next.toUpperCase();
        });
        langToggle.textContent = '🌍 ' + savedLang.toUpperCase();
    }
});
