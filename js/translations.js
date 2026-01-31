// ========================================
// FICHIER DE TRADUCTIONS - FR/EN
// ========================================

const translations = {
    fr: {
        // Navigation
        nav: {
            about: "À propos",
            skills: "Compétences",
            experience: "Expérience",
            projects: "Projets",
            education: "Formation",
            contact: "Contact"
        },

        // Hero Section
        hero: {
            available: "Disponible pour de nouvelles opportunités",
            viewProjects: "Voir mes projets",
            contactMe: "Me contacter",
            efficiencyGain: "Gain d'efficacité",
            aiProjects: "Projets IA",
            technologies: "Technologies",
            scroll: "Scroll"
        },

        // About Section
        about: {
            tag: "À propos",
            title: "Qui suis-je ?",
            location: "Localisation",
            email: "Email",
            phone: "Téléphone",
            languages: "Langues"
        },

        // Skills Section
        skills: {
            tag: "Compétences",
            title: "Mon expertise technique"
        },

        // Experience Section
        experience: {
            tag: "Expérience",
            title: "Mon parcours professionnel",
            achievements: "Réalisations",
            impact: "Impact"
        },

        // Projects Section
        projects: {
            tag: "Projets",
            title: "Mes réalisations",
            all: "Tous",
            ai: "IA",
            rag: "RAG",
            chatbot: "Chatbot",
            automation: "Automation"
        },

        // Education Section
        education: {
            tag: "Formation",
            title: "Mon parcours académique",
            softSkills: "Soft Skills"
        },

        // Contact Section
        contact: {
            tag: "Contact",
            title: "Travaillons ensemble",
            description: "Intéressé par mes compétences ? N'hésitez pas à me contacter pour discuter de vos projets.",
            email: "Email",
            phone: "Téléphone",
            location: "Localisation",
            sendEmail: "Envoyer un email",
            call: "Appeler",
            findMe: "Retrouvez-moi sur les réseaux"
        },

        // Footer
        footer: {
            brand: "AI Engineer - Spécialisé en IA Générative",
            rights: "Tous droits réservés."
        },

        // Floating badges
        badges: {
            generativeAI: "IA Générative",
            multiAgents: "Multi-Agents",
            rag: "RAG"
        },

        // Language levels
        languageLevels: {
            french: "Français",
            english: "Anglais",
            fluent: "Courant",
            professional: "Professionnel"
        }
    },

    en: {
        // Navigation
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            education: "Education",
            contact: "Contact"
        },

        // Hero Section
        hero: {
            available: "Available for new opportunities",
            viewProjects: "View my projects",
            contactMe: "Contact me",
            efficiencyGain: "Efficiency gain",
            aiProjects: "AI Projects",
            technologies: "Technologies",
            scroll: "Scroll"
        },

        // About Section
        about: {
            tag: "About",
            title: "Who am I?",
            location: "Location",
            email: "Email",
            phone: "Phone",
            languages: "Languages"
        },

        // Skills Section
        skills: {
            tag: "Skills",
            title: "My technical expertise"
        },

        // Experience Section
        experience: {
            tag: "Experience",
            title: "My professional journey",
            achievements: "Achievements",
            impact: "Impact"
        },

        // Projects Section
        projects: {
            tag: "Projects",
            title: "My achievements",
            all: "All",
            ai: "AI",
            rag: "RAG",
            chatbot: "Chatbot",
            automation: "Automation"
        },

        // Education Section
        education: {
            tag: "Education",
            title: "My academic background",
            softSkills: "Soft Skills"
        },

        // Contact Section
        contact: {
            tag: "Contact",
            title: "Let's work together",
            description: "Interested in my skills? Feel free to contact me to discuss your projects.",
            email: "Email",
            phone: "Phone",
            location: "Location",
            sendEmail: "Send an email",
            call: "Call",
            findMe: "Find me on social networks"
        },

        // Footer
        footer: {
            brand: "AI Engineer - Specialized in Generative AI",
            rights: "All rights reserved."
        },

        // Floating badges
        badges: {
            generativeAI: "Generative AI",
            multiAgents: "Multi-Agents",
            rag: "RAG"
        },

        // Language levels
        languageLevels: {
            french: "French",
            english: "English",
            fluent: "Fluent",
            professional: "Professional"
        }
    }
};

// Fonction pour obtenir la traduction
function t(key, lang = currentLanguage) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}
