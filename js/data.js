// ========================================
// FICHIER DE DONNÉES DU PORTFOLIO - BILINGUE FR/EN
// Modifiez ce fichier pour mettre à jour votre portfolio
// ========================================

const portfolioData = {
    // ========================================
    // INFORMATIONS PERSONNELLES
    // ========================================
    personal: {
        name: "Ismael OUATTARA",
        title: "AI Engineer",
        subtitle: {
            fr: "Spécialisé en IA Générative, RAG & Systèmes Multi-Agents",
            en: "Specialized in Generative AI, RAG & Multi-Agent Systems"
        },
        email: "ouattaraismael.mail@gmail.com",
        phone: "+212 660170528",
        location: {
            fr: "Casablanca, Maroc",
            en: "Casablanca, Morocco"
        },
        social: {
            linkedin: "https://www.linkedin.com/in/ismael-ouattara-a40488250/",
            github: "https://github.com/ismoky07",
            twitter: ""
        },
        photo: "assets/profile.jpg"
    },

    // ========================================
    // SECTION À PROPOS
    // ========================================
    about: {
        description: {
            fr: `Jeune ingénieur en Intelligence Artificielle passionné par l'IA générative, les architectures RAG et les systèmes multi-agents.
            Première expérience professionnelle chez Talent Performer, complétée par des stages et POC dans des domaines variés (banque, juridique, RH, immobilier, éducation),
            avec un focus sur l'automatisation intelligente, l'OCR et l'orchestration d'agents.`,
            en: `Junior AI Engineer passionate about generative AI, RAG architectures and multi-agent systems.
            First professional experience at Talent Performer, complemented by internships and POCs in various domains (banking, legal, HR, real estate, education),
            with a focus on intelligent automation, OCR and agent orchestration.`
        },
        highlights: {
            fr: [
                "Compétent en architectures RAG et systèmes multi-agents",
                "Expérience en OCR et traitement documentaire",
                "Guardrails AI pour sécuriser les réponses IA et les conformités",
                "POC réalisés dans des contextes métier variés"
            ],
            en: [
                "Skilled in RAG architectures and multi-agent systems",
                "Experience in OCR and document processing",
                "Guardrails AI to secure AI responses and compliance",
                "POCs completed in various business contexts"
            ]
        }
    },

    // ========================================
    // COMPÉTENCES
    // ========================================
    skills: [
        {
            category: {
                fr: "IA Générative & Agents",
                en: "Generative AI & Agents"
            },
            icon: "fas fa-robot",
            items: ["RAG", "Multi-Agent Systems", "Agno", "LangGraph", "Guardrails AI", "n8n", "Prompt Engineering"]
        },
        {
            category: {
                fr: "IA & Machine Learning",
                en: "AI & Machine Learning"
            },
            icon: "fas fa-brain",
            items: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Machine Learning", "Deep Learning"]
        },
        {
            category: {
                fr: "Bases de données & Vector DB",
                en: "Databases & Vector DB"
            },
            icon: "fas fa-database",
            items: ["PostgreSQL", "PgVector", "FAISS", "Qdrant", "LanceDB", "SQLite", "Neo4j"]
        },
        {
            category: {
                fr: "OCR & Traitement documentaire",
                en: "OCR & Document Processing"
            },
            icon: "fas fa-file-alt",
            items: ["Mistral OCR", "GPT-4 Vision", "PyMuPDF", "pdf2image"]
        },
        {
            category: {
                fr: "Développement & Intégration",
                en: "Development & Integration"
            },
            icon: "fas fa-code",
            items: ["Streamlit", "FastAPI", "Flask", "Ngrok", "React"]
        },
        {
            category: {
                fr: "Déploiement & DevOps",
                en: "Deployment & DevOps"
            },
            icon: "fas fa-cloud-upload-alt",
            items: ["GitHub", "Render", "Docker", "AWS", "Vercel", "Railway"]
        }
    ],

    // ========================================
    // EXPÉRIENCES PROFESSIONNELLES
    // ========================================
    experiences: [
        {
            title: "AI Engineer",
            company: "TALENT PERFORMER",
            companyUrl: "https://www.talentperformer.com/",
            period: {
                fr: "Juillet 2025 - Novembre 2025",
                en: "July 2025 - November 2025"
            },
            projects: [
                {
                    name: {
                        fr: "Système Intelligent de Gestion des Retraites",
                        en: "Intelligent Retirement Management System"
                    },
                    projectUrl: "projects/gestion-retraites.html",
                    githubUrl: "https://github.com/ismoky07/Caisse-de-Retraite",
                    context: {
                        fr: "Système multi-agents IA pour automatiser les processus métier d'une caisse de retraite.",
                        en: "Multi-agent AI system to automate business processes for a retirement fund."
                    },
                    achievements: {
                        fr: [
                            "Développement de 4 modules multi-agents (16 agents spécialisés)",
                            "Chatbot support client 24/7 multilingue (FR/AR/Darija) avec 70-80% de résolution auto",
                            "Système de génération automatique de lettres juridiques avec validation 20 points",
                            "Transcription audio automatisée avec AssemblyAI et génération de PV professionnels"
                        ],
                        en: [
                            "Development of 4 multi-agent modules (16 specialized agents)",
                            "24/7 multilingual customer support chatbot (FR/AR/Darija) with 70-80% auto-resolution",
                            "Automatic legal letter generation system with 20-point validation",
                            "Automated audio transcription with AssemblyAI and professional minutes generation"
                        ]
                    },
                    technologies: ["Agno", "Claude 4", "xAI Grok-3", "AssemblyAI", "PostgreSQL", "PgVector", "Python", "Guardrails AI"]
                },
                {
                    name: {
                        fr: "Système Intelligent de Gestion Immobilière",
                        en: "Intelligent Real Estate Management System"
                    },
                    projectUrl: "projects/gestion-immobilier.html",
                    githubUrl: "https://github.com/ismoky07/REAL-ESTATE-OS",
                    context: {
                        fr: "Plateforme intelligente orchestrant 40 agents IA pour automatiser le cycle complet de l'immobilier.",
                        en: "Intelligent platform orchestrating 40 AI agents to automate the complete real estate cycle."
                    },
                    achievements: {
                        fr: [
                            "Développement de 8 modules métier avec 40 agents IA spécialisés",
                            "100+ outils personnalisés (évaluation AVM, scoring leads ML, génération contrats)",
                            "Recherche sémantique PgVector et intégrations Google Calendar, DALL-E, CalCom"
                        ],
                        en: [
                            "Development of 8 business modules with 40 specialized AI agents",
                            "100+ custom tools (AVM valuation, ML lead scoring, contract generation)",
                            "PgVector semantic search and integrations with Google Calendar, DALL-E, CalCom"
                        ]
                    },
                    technologies: ["Agno", "OpenAI GPT-4", "PgVector", "PostgreSQL", "Streamlit", "DALL-E", "Docker", "Python"]
                },
                {
                    name: {
                        fr: "ALM - Système de Gestion Actif-Passif",
                        en: "ALM - Asset Liability Management System"
                    },
                    projectUrl: "projects/alm-finance.html",
                    githubUrl: "https://github.com/ismoky07/FinanceOS/tree/main/Finance%20Modules/ALM",
                    context: {
                        fr: "Système multi-agents IA pour la gestion Actif-Passif bancaire avec conformité Basel III.",
                        en: "Multi-agent AI system for bank Asset Liability Management with Basel III compliance."
                    },
                    achievements: {
                        fr: [
                            "Développement de 6 agents ALM spécialisés (liquidité, solvabilité, rentabilité, risque, trésorerie)",
                            "Support multi-LLM avec fallback automatique (xAI Grok-3, GPT-4, Claude, Mistral, DeepSeek)",
                            "Calculs réglementaires Basel III (LCR, EVE, NII, CET1, IRRBB) avec dashboard interactif"
                        ],
                        en: [
                            "Development of 6 specialized ALM agents (liquidity, solvency, profitability, risk, treasury)",
                            "Multi-LLM support with automatic fallback (xAI Grok-3, GPT-4, Claude, Mistral, DeepSeek)",
                            "Basel III regulatory calculations (LCR, EVE, NII, CET1, IRRBB) with interactive dashboard"
                        ]
                    },
                    technologies: ["Agno", "xAI Grok-3", "OpenAI GPT-4", "PgVector", "PostgreSQL", "Flask", "Tailwind CSS", "Docker"]
                }
            ]
        },
        {
            title: {
                fr: "Stagiaire AI Engineer",
                en: "AI Engineer Intern"
            },
            company: "KERTYS",
            companyUrl: "https://www.kertys.com/",
            period: {
                fr: "Mars 2025 - Juillet 2025",
                en: "March 2025 - July 2025"
            },
            projects: [
                {
                    name: {
                        fr: "Système Intelligent d'Octroi de Crédit Bancaire (PFE)",
                        en: "Intelligent Bank Credit Granting System (Final Year Project)"
                    },
                    projectUrl: "projects/octroi-credit.html",
                    githubUrl: "https://github.com/ismoky07/Octroi_Credit",
                    context: {
                        fr: "Plateforme bancaire complète avec workflow LangGraph et OCR GPT-4o Vision pour documents marocains.",
                        en: "Complete banking platform with LangGraph workflow and GPT-4o Vision OCR for Moroccan documents."
                    },
                    achievements: {
                        fr: [
                            "Workflow LangGraph 6 nodes : chargement → validation → OCR → concordance → rapport",
                            "OCR GPT-4o Vision pour 6 types de documents marocains (CIN, bulletins, factures)",
                            "Vérification de concordance à 6 niveaux avec scoring qualité et mode récupération",
                            "4 types de crédits (Auto, Immo, Conso, Découvert) avec simulateurs et dashboard admin"
                        ],
                        en: [
                            "6-node LangGraph workflow: loading → validation → OCR → concordance → report",
                            "GPT-4o Vision OCR for 6 types of Moroccan documents (CIN, payslips, bills)",
                            "6-level concordance verification with quality scoring and recovery mode",
                            "4 credit types (Auto, Real Estate, Consumer, Overdraft) with simulators and admin dashboard"
                        ]
                    },
                    technologies: ["Python", "Streamlit", "LangGraph", "OpenAI GPT-4o", "GPT-4 Vision", "PyMuPDF", "ReportLab", "Plotly"]
                },
                {
                    name: {
                        fr: "Plateforme Universitaire Intelligente",
                        en: "Intelligent University Platform"
                    },
                    projectUrl: "projects/plateforme-universitaire.html",
                    githubUrl: "https://github.com/ismoky07/Plateforme_Universite",
                    context: {
                        fr: "Plateforme éducative complète avec 3 rôles, vérification OCR des candidatures et correction IA.",
                        en: "Complete educational platform with 3 roles, OCR verification of applications and AI grading."
                    },
                    achievements: {
                        fr: [
                            "3 rôles utilisateurs (Admin, Professeur, Étudiant) avec 11 pages Streamlit",
                            "Agent OCR vérification bulletins : détection anomalies notes, seuil confiance 0.7",
                            "Module correction IA 16+ matières avec 3 profils (Excellence/Équilibre/Rapide)",
                            "Publication contrôlée des résultats et rapports PDF personnalisés avec feedback IA"
                        ],
                        en: [
                            "3 user roles (Admin, Professor, Student) with 11 Streamlit pages",
                            "OCR bulletin verification agent: grade anomaly detection, 0.7 confidence threshold",
                            "AI grading module for 16+ subjects with 3 profiles (Excellence/Balanced/Fast)",
                            "Controlled results publication and personalized PDF reports with AI feedback"
                        ]
                    },
                    technologies: ["Python", "Streamlit", "OpenAI GPT-4", "GPT-4 Vision", "PyMuPDF", "ReportLab", "OpenCV", "Plotly"]
                },
                {
                    name: {
                        fr: "Système de Correction Automatique par IA",
                        en: "AI Automatic Grading System"
                    },
                    projectUrl: "projects/correction-automatique.html",
                    githubUrl: "https://github.com/ismoky07/Plateforme_Universite/tree/main/agentCorrection",
                    context: {
                        fr: "Plateforme de correction avec OCR GPT-4 Vision, 15+ matières spécialisées et feedback adaptatif.",
                        en: "Grading platform with GPT-4 Vision OCR, 15+ specialized subjects and adaptive feedback."
                    },
                    achievements: {
                        fr: [
                            "15+ matières spécialisées avec critères pondérés (Maths: Calculs 40%, Rigueur 35%, Logique 20%)",
                            "OCR GPT-4 Vision manuscrit avec 3 niveaux qualité et scoring de confiance",
                            "3 profils de correction (excellence/équilibre/rapide) et feedback adaptatif 6 niveaux",
                            "Double interface Prof/Étudiant (11 pages) avec génération rapports PDF personnalisés"
                        ],
                        en: [
                            "15+ specialized subjects with weighted criteria (Math: Calculations 40%, Rigor 35%, Logic 20%)",
                            "GPT-4 Vision handwritten OCR with 3 quality levels and confidence scoring",
                            "3 correction profiles (excellence/balanced/fast) and 6-level adaptive feedback",
                            "Dual Prof/Student interface (11 pages) with personalized PDF report generation"
                        ]
                    },
                    technologies: ["Python", "Streamlit", "OpenAI GPT-4o", "GPT-4 Vision", "PyMuPDF", "ReportLab", "Plotly", "Pydantic"]
                }
            ]
        }
    ],

    // ========================================
    // PROJETS PERSONNELS
    // ========================================
    projects: [
        {
            name: "AI Meeting & Audio Intelligence Platform",
            description: {
                fr: "Application qui convertit des fichiers audio en texte via AssemblyAI, puis génère des résumés ou des explications détaillées avec GPT.",
                en: "Application that converts audio files to text via AssemblyAI, then generates summaries or detailed explanations with GPT."
            },
            technologies: ["AssemblyAI", "Streamlit", "FPDF", "OpenAI GPT-4o"],
            category: "ai",
            github: "",
            demo: ""
        },
        {
            name: "Intelligent Document Retrieval System (RAG)",
            description: {
                fr: "Application qui extrait le contenu de PDFs publics via FireCrawl, puis permet de poser des questions sur le contenu extrait.",
                en: "Application that extracts content from public PDFs via FireCrawl, then allows asking questions about the extracted content."
            },
            technologies: ["FireCrawl", "Agno", "Streamlit", "BeautifulSoup", "OpenAI GPT-4o"],
            category: "rag",
            github: "",
            demo: ""
        },
        {
            name: "No-Code Automation Hub",
            description: {
                fr: "Workflow d'orchestration avec n8n et Airtable pour l'automatisation de processus métier.",
                en: "Orchestration workflow with n8n and Airtable for business process automation."
            },
            technologies: ["n8n", "Airtable"],
            category: "automation",
            github: "",
            demo: ""
        },
        {
            name: "AI Legal Copilot",
            description: {
                fr: "Application pour l'analyse de documents juridiques avec Mistral OCR et recherche vectorielle FAISS.",
                en: "Application for legal document analysis with Mistral OCR and FAISS vector search."
            },
            technologies: ["Mistral AI", "FAISS", "Mistral Embeddings", "Streamlit"],
            category: "rag",
            github: "",
            demo: ""
        },
        {
            name: "TaskBot AI",
            description: {
                fr: "Bot WhatsApp qui gère une liste de tâches via l'API Todoist avec interactions intelligentes.",
                en: "WhatsApp bot that manages a task list via the Todoist API with intelligent interactions."
            },
            technologies: ["FastAPI", "WhatsApp Business API", "Agno", "OpenAI GPT-4o", "Todoist API"],
            category: "chatbot",
            github: "",
            demo: ""
        },
        {
            name: "CompanionAI",
            description: {
                fr: "Bot WhatsApp utilisant Letta comme agent compagnon persistant. Supporte les messages textes et images.",
                en: "WhatsApp bot using Letta as a persistent companion agent. Supports text and image messages."
            },
            technologies: ["FastAPI", "WhatsApp Business API", "Letta Client", "Uvicorn"],
            category: "chatbot",
            github: "",
            demo: ""
        }
    ],

    // ========================================
    // FORMATION
    // ========================================
    education: [
        {
            degree: {
                fr: "Cycle d'Ingénierie : Data Science",
                en: "Engineering Degree: Data Science"
            },
            school: "ESTEM",
            location: {
                fr: "Casablanca, Maroc",
                en: "Casablanca, Morocco"
            },
            period: "2022 - 2025"
        },
        {
            degree: {
                fr: "Classes Préparatoires MP",
                en: "Preparatory Classes MP"
            },
            school: "ESTEM",
            location: {
                fr: "Casablanca, Maroc",
                en: "Casablanca, Morocco"
            },
            period: "2020 - 2022"
        }
    ],

    // ========================================
    // LANGUES
    // ========================================
    languages: [
        {
            name: { fr: "Français", en: "French" },
            level: { fr: "Natif", en: "Native" },
            percentage: 100
        },
        {
            name: { fr: "Anglais", en: "English" },
            level: { fr: "Intermédiaire avancé", en: "Upper Intermediate" },
            percentage: 70
        }
    ],

    // ========================================
    // SOFT SKILLS
    // ========================================
    softSkills: {
        fr: ["Autonome", "Adaptabilité", "Esprit Critique", "Esprit d'Équipe", "Bonne Communication"],
        en: ["Self-Reliant", "Adaptability", "Critical Thinking", "Team Spirit", "Good Communication"]
    }
};

// Fonction utilitaire pour obtenir une valeur traduite
function getLocalizedValue(value, lang) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return value[lang] || value['fr'] || value;
    }
    return value;
}
