// Initialize Feather Icons
feather.replace();

// Content translations
const content = {
    en: {
        nav: {
            home: "Home",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            title: "Full Stack Developer",
            bio: "Full Stack Developer with experience in project management at FOR YOU Institut and development at NAVIFRET NADOR. Specialized in web development and software solutions."
        },
        cta: "Get in Touch"
    },
    de: {
        nav: {
            home: "Startseite",
            skills: "Fähigkeiten",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            title: "Fullstack-Entwickler",
            bio: "Fullstack-Entwickler mit Erfahrung im Projektmanagement bei FOR YOU Institut und Entwicklung bei NAVIFRET NADOR. Spezialisiert auf Webentwicklung und Softwarelösungen."
        },
        cta: "Kontaktieren"
    }
};

// Skills data
const skills = [
    "C", "C++", "Python", "Java", "C#",
    "HTML", "CSS", "JavaScript", "PHP",
    "SQL-Server", "MySQL", "Git", "MS Office", "Jira"
];

// Projects data
const projects = [
    {
        title: "FOR YOU Institut Project",
        description: "School management system tracking classes, payments, sessions, and teacher salaries.",
        tech: ["Project Management", "Development", "Team Leadership","SQL/SQLServer","C#/ADO.NET"],
        github: "https://github.com/Bilyz26/School-Management-System",
        demo: "#"
    },
    {
        title: "GoCAR",
        description: "Online platform for browsing, selecting, and renting cars easily.",
        tech: ["Frontend Development","Git/Github" ,"UI/UX Design"],
        github: "https://github.com/Bilyz26/GoCar-Website",
        demo: "https://bilyz26.github.io/GoCar-Website/"
    },
    {
        title: "pokemon-pokedex",
        description: "Comprehensive Pokémon database displaying characters' stats, powers, and classifications.",
        tech:  ["Git/Github" ,"UI/UX Design","Performance & Best Practices","Data Management & API","Frontend Development"],
        github: "https://github.com/Bilyz26/pokemon-pokedex",
        demo: "https://bilyz26.github.io/pokemon-pokedex/"
    },
    {
        title: "ArtisanCraft-Marketplace",
        description: "Handmade and traditional crafts marketplace connecting artisans with buyers.",
        tech: ["Git/Github" ,"UI/UX Design","Jira","Teamwork","Frontend Development"],
        github: "https://github.com/Bilyz26/pokemon-pokedex",
        demo: "https://bilyz26.github.io/ArtisanCraft-Marketplace/"
    }
];

// Initialize page content
function initializePage() {
    // Render skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = skills.map((skill, index) => `
        <span class="px-4 py-2 bg-gray-100 rounded-full text-gray-700 transition-all skill-label" style="animation-delay: ${index * 100}ms">
            ${skill}
        </span>
    `).join('');

    // Add intersection observer for skills animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLabels = entry.target.querySelectorAll('.skill-label');
                skillLabels.forEach(label => {
                    label.classList.add('animate');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(skillsContainer);

    // Render projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projects.map(project => `
        <div class="card bg-white rounded-lg shadow-md p-6 transition-all">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(tech => `
                    <span class="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600">
                        ${tech}
                    </span>
                `).join('')}
            </div>
            <div class="flex space-x-4">
                <a href="${project.github}" class="flex items-center text-gray-600 hover:text-gray-900">
                    <i data-feather="github" class="w-4 h-4 mr-1"></i>
                    Code
                </a>
                <a href="${project.demo}" class="flex items-center text-gray-600 hover:text-gray-900">
                    <i data-feather="external-link" class="w-4 h-4 mr-1"></i>
                    Demo
                </a>
            </div>
        </div>
    `).join('');

    // Re-initialize Feather Icons for dynamically added content
    feather.replace();
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const icon = document.querySelector('.dark-toggle');
    const logoImage = document.getElementById('logo-image');
    const secondaryNavbar = document.querySelector('.secondary-navbar');
    
    if (document.body.classList.contains('dark')) {
        icon.setAttribute('data-feather', 'sun');
        logoImage.src = 'logo/logo white.png';
        // Add dark mode styles to both navbars
        document.querySelector('.navbar').classList.add('dark-nav');
        secondaryNavbar.classList.add('dark-nav');
    } else {
        icon.setAttribute('data-feather', 'moon');
        logoImage.src = 'logo/logo black.png';
        // Remove dark mode styles from both navbars
        document.querySelector('.navbar').classList.remove('dark-nav');
        secondaryNavbar.classList.remove('dark-nav');
    }
    feather.replace();
}

// Language change function
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const keys = element.getAttribute('data-lang-key').split('.');
        let value = content[lang];
        keys.forEach(key => {
            value = value[key];
        });
        element.textContent = value;
    });
}

// Initialize the page
initializePage();
