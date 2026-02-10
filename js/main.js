// ========================================
// MAIN JAVASCRIPT - PORTFOLIO BILINGUE
// ========================================

// Langue courante (par defaut: francais)
let currentLanguage = localStorage.getItem('portfolioLanguage') || 'fr';

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le portfolio
    initLanguageSwitcher();
    initPortfolio();
    initNavigation();
    initScrollAnimations();
    initProjectFilters();
    updateYear();
});

// ========================================
// GESTION DES LANGUES
// ========================================
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Activer le bouton de la langue courante
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

                // Mettre a jour les boutons
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Mettre a jour l'attribut lang de la page
                document.documentElement.lang = newLang;

                // Recharger le contenu
                updateAllContent();
            }
        });
    });

    // Definir la langue initiale
    document.documentElement.lang = currentLanguage;
}

function updateAllContent() {
    // Mettre a jour les textes statiques avec data-i18n
    updateStaticTexts();

    // Recharger les sections dynamiques
    loadPersonalInfo();
    loadSkills();
    loadExperiences();
    loadProjects();
    loadEducation();
    loadSoftSkills();

    // Reinitialiser les filtres de projets
    initProjectFilters();

    // Reinitialiser les animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

function updateStaticTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        if (translation && translation !== key) {
            element.textContent = translation;
        }
    });
}

// ========================================
// INITIALISATION DU PORTFOLIO
// ========================================
function initPortfolio() {
    // Verifier que les donnees sont disponibles
    if (typeof portfolioData === 'undefined') {
        console.error('Les donnees du portfolio ne sont pas chargees.');
        return;
    }

    // Charger les informations personnelles
    loadPersonalInfo();

    // Charger les sections
    loadSkills();
    loadExperiences();
    loadProjects();
    loadEducation();
    loadSoftSkills();
}

// ========================================
// CHARGEMENT DES INFORMATIONS PERSONNELLES
// ========================================
function loadPersonalInfo() {
    const data = portfolioData.personal;
    const about = portfolioData.about;

    // Hero section
    document.getElementById('hero-name').textContent = data.name;
    document.getElementById('hero-title').textContent = data.title;
    document.getElementById('hero-subtitle').textContent = getLocalizedValue(data.subtitle, currentLanguage);

    // About section
    document.getElementById('about-description').textContent = getLocalizedValue(about.description, currentLanguage);
    document.getElementById('info-location').textContent = getLocalizedValue(data.location, currentLanguage);
    const infoEmail = document.getElementById('info-email');
    infoEmail.textContent = data.email;
    infoEmail.href = `mailto:${data.email}`;
    document.getElementById('info-phone').textContent = data.phone;

    // Contact section
    document.getElementById('contact-email').textContent = data.email;
    document.getElementById('contact-phone').textContent = data.phone;
    document.getElementById('contact-location').textContent = getLocalizedValue(data.location, currentLanguage);

    // Charger les highlights
    const highlightsList = document.getElementById('about-highlights');
    const highlights = getLocalizedValue(about.highlights, currentLanguage);
    highlightsList.innerHTML = highlights.map(highlight => `
        <li><i class="fas fa-check"></i> ${highlight}</li>
    `).join('');

    // Charger les langues
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML = portfolioData.languages.map(lang => `
        <div class="language-item">
            <span>${getLocalizedValue(lang.name, currentLanguage)} - ${getLocalizedValue(lang.level, currentLanguage)}</span>
            <div class="language-bar">
                <div class="language-progress" style="width: ${lang.percentage}%"></div>
            </div>
        </div>
    `).join('');

    // Charger les liens sociaux
    updateSocialLinks();

    // Charger la photo si disponible
    loadProfilePhoto();
}

// ========================================
// MISE A JOUR DES LIENS SOCIAUX
// ========================================
function updateSocialLinks() {
    const social = portfolioData.personal.social;
    const email = portfolioData.personal.email;

    // Mettre a jour tous les liens sociaux
    document.querySelectorAll('[data-social]').forEach(link => {
        const type = link.getAttribute('data-social');

        if (type === 'linkedin' && social.linkedin) {
            link.href = social.linkedin;
            link.target = '_blank';
        } else if (type === 'github' && social.github) {
            link.href = social.github;
            link.target = '_blank';
        } else if (type === 'email') {
            link.href = `mailto:${email}`;
        }
    });
}

// ========================================
// CHARGEMENT DE LA PHOTO DE PROFIL
// ========================================
function loadProfilePhoto() {
    const photoPath = portfolioData.personal.photo;
    const heroImage = document.getElementById('hero-image');

    // Tester si l'image existe
    const img = new Image();
    img.onload = function() {
        heroImage.innerHTML = `<img src="${photoPath}" alt="${portfolioData.personal.name}">`;
    };
    img.onerror = function() {
        // Garder l'icone par defaut si l'image n'existe pas
        console.log('Photo de profil non trouvee. Utilisez le placeholder ou ajoutez une image dans assets/profile.jpg');
    };
    img.src = photoPath;
}

// ========================================
// CHARGEMENT DES COMPETENCES
// ========================================
function loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');

    skillsGrid.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-card fade-in">
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <h3 class="skill-title">${getLocalizedValue(skill.category, currentLanguage)}</h3>
            </div>
            <div class="skill-tags">
                ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ========================================
// CHARGEMENT DES EXPERIENCES
// ========================================
function loadExperiences() {
    const timeline = document.getElementById('experience-timeline');
    const achievementsLabel = t('experience.achievements');
    const impactLabel = t('experience.impact');

    timeline.innerHTML = portfolioData.experiences.map(exp => `
        <div class="experience-item fade-in">
            <div class="experience-dot"></div>
            <div class="experience-header">
                <div class="experience-info">
                    <h3>${getLocalizedValue(exp.title, currentLanguage)}</h3>
                    ${exp.companyUrl
                        ? `<a href="${exp.companyUrl}" class="experience-company company-link" target="_blank" rel="noopener noreferrer">${exp.company} <i class="fas fa-external-link-alt"></i></a>`
                        : `<span class="experience-company">${exp.company}</span>`
                    }
                </div>
                <span class="experience-period">${getLocalizedValue(exp.period, currentLanguage)}</span>
            </div>
            <div class="experience-projects">
                ${exp.projects.map(project => `
                    <div class="project-card${project.projectUrl ? ' clickable' : ''}" ${project.projectUrl ? `onclick="window.location.href='${project.projectUrl}'"` : ''}>
                        <div class="project-header-row">
                            <h4>${getLocalizedValue(project.name, currentLanguage)}</h4>
                            ${project.githubUrl ? `
                                <a href="${project.githubUrl}" target="_blank" class="project-github-link" title="Voir sur GitHub" onclick="event.stopPropagation()">
                                    <i class="fab fa-github"></i>
                                </a>
                            ` : ''}
                        </div>
                        <p class="project-context">${getLocalizedValue(project.context, currentLanguage)}</p>

                        <div class="project-achievements">
                            <h5>${achievementsLabel}</h5>
                            <ul>
                                ${getLocalizedValue(project.achievements, currentLanguage).map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>

                        ${project.impact ? `
                            <div class="project-impact">
                                <h5>${impactLabel}</h5>
                                <ul>
                                    ${getLocalizedValue(project.impact, currentLanguage).map(i => `<li>${i}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}

                        <div class="project-technologies">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========================================
// CHARGEMENT DES PROJETS
// ========================================
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');

    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-item fade-in${project.projectUrl ? ' clickable' : ''}" data-category="${project.category}" ${project.projectUrl ? `onclick="window.location.href='${project.projectUrl}'"` : ''}>
            <div class="project-item-header">
                <div class="project-item-icon">
                    <i class="${getProjectIcon(project.category)}"></i>
                </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" class="project-link" target="_blank" title="GitHub" onclick="event.stopPropagation()">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href="${project.demo}" class="project-link" target="_blank" title="Demo" onclick="event.stopPropagation()">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <h3>${getLocalizedValue(project.name, currentLanguage)}</h3>
            <p>${getLocalizedValue(project.description, currentLanguage)}</p>
            <div class="project-item-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            ${project.projectUrl ? `
                <div class="project-detail-link">
                    <span>${t('projects.viewDetails')}</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// ========================================
// ICONE SELON LA CATEGORIE DU PROJET
// ========================================
function getProjectIcon(category) {
    const icons = {
        'ai': 'fas fa-brain',
        'rag': 'fas fa-database',
        'chatbot': 'fas fa-comments',
        'automation': 'fas fa-cogs',
        'web': 'fas fa-globe'
    };
    return icons[category] || 'fas fa-project-diagram';
}

// ========================================
// CHARGEMENT DE LA FORMATION
// ========================================
function loadEducation() {
    const educationGrid = document.getElementById('education-grid');

    educationGrid.innerHTML = portfolioData.education.map(edu => `
        <div class="education-card fade-in">
            <div class="education-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>${getLocalizedValue(edu.degree, currentLanguage)}</h3>
            <p class="education-school">${edu.school}</p>
            <p class="education-location">${getLocalizedValue(edu.location, currentLanguage)}</p>
            <span class="education-period">${edu.period}</span>
        </div>
    `).join('');
}

// ========================================
// CHARGEMENT DES SOFT SKILLS
// ========================================
function loadSoftSkills() {
    const softSkillsList = document.getElementById('soft-skills-list');
    const skills = getLocalizedValue(portfolioData.softSkills, currentLanguage);

    softSkillsList.innerHTML = skills.map(skill => `
        <span class="soft-skill-tag">${skill}</span>
    `).join('');
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    });
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer tous les elements avec la classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Re-observer apres le chargement dynamique
    setTimeout(() => {
        document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

// ========================================
// FILTRES DES PROJETS
// ========================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            const filter = this.getAttribute('data-filter');

            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.classList.remove('hidden');
                    project.style.display = 'flex';
                } else {
                    project.classList.add('hidden');
                    project.style.display = 'none';
                }
            });
        });
    });
}

// ========================================
// MISE A JOUR DE L'ANNEE
// ========================================
function updateYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// ========================================
// SMOOTH SCROLL POUR LES ANCRES
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
