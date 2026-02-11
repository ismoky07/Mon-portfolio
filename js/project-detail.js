// ========================================
// PROJECT DETAIL PAGE JAVASCRIPT
// ========================================

// Current language (default: French)
let currentLanguage = localStorage.getItem('portfolioLanguage') || 'fr';

document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initLanguageSwitcher();
    updateStaticTexts();
    updateYear();
    initNavbarScroll();
});

// ========================================
// LANGUAGE MANAGEMENT
// ========================================
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Activate current language button
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            if (newLang !== currentLanguage) {
                currentLanguage = newLang;
                localStorage.setItem('portfolioLanguage', newLang);

                // Update buttons
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Update page language attribute
                document.documentElement.lang = newLang;

                // Reload content
                updateStaticTexts();
            }
        });
    });

    // Set initial language
    document.documentElement.lang = currentLanguage;
}

// ========================================
// UPDATE STATIC TEXTS
// ========================================
function updateStaticTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation && translation !== key) {
            // Check if the translation contains HTML (like <strong> tags)
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// ========================================
// GET TRANSLATION BY KEY
// ========================================
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key;
        }
    }

    return value || key;
}

// ========================================
// UPDATE YEAR
// ========================================
function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ========================================
// THEME TOGGLE (DARK/LIGHT)
// ========================================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
    applyTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.body.classList.add('theme-transition');
            applyTheme(newTheme);
            localStorage.setItem('portfolioTheme', newTheme);

            setTimeout(function() {
                document.body.classList.remove('theme-transition');
            }, 300);
        });
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}
