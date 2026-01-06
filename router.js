// ROUTER.JS - Gestione della navigazione SPA

// Configurazione delle pagine disponibili
const PAGES = {
    'home': 'README.md',
    'ud1': 'ud1.md',
    'ud2': 'ud2.md',
    'ud3': 'ud3.md',
    'ud4': 'ud4.md',
    'ud5': 'ud5.md',
    'def_datore': 'def_datore.md',
    'def_dirigente': 'def_dirigente.md',
    'def_dvr': 'def_dvr.md',
    'def_iso_14001': 'def_iso_14001.md',
    'def_iso_45001': 'def_iso_45001.md',
    'def_iso_9001': 'def_iso_9001.md',
    'def_lavoratore': 'def_lavoratore.md',
    'def_medico': 'def_medico.md',
    'def_norme': 'def_norme.md',
    'def_pos': 'def_pos.md',
    'def_preposto': 'def_preposto.md',
    'def_rifiuti': 'def_rifiuti.md',
    'def_rls': 'def_rls.md',
    'def_rspp': 'def_rspp.md',
    'manuale_completo': 'manuale_completo.md',
    'business_plan': 'business_plan.md'
};

// Configurazione di marked per renderizzare Markdown
marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    sanitize: false
});

// Inizializzazione di Mermaid
mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
    }
});

// Funzione per caricare una pagina
async function loadPage(pageId) {
    const contentDiv = document.getElementById('content');
    
    // Mostra stato di caricamento
    contentDiv.innerHTML = `
        <div style="text-align: center; padding: 50px;">
            <h2>Caricamento...</h2>
            <p>${pageId}</p>
        </div>
    `;
    
    // Verifica se la pagina esiste
    if (!PAGES[pageId]) {
        contentDiv.innerHTML = `
            <div class="card">
                <h1>Pagina non trovata</h1>
                <p>La pagina "${pageId}" non esiste.</p>
                <a href="#/home" class="nav-button">Torna alla Home</a>
            </div>
        `;
        return;
    }
    
    try {
        // Carica il file markdown
        const response = await fetch(PAGES[pageId]);
        if (!response.ok) throw new Error(`Errore HTTP ${response.status}`);
        
        const markdownText = await response.text();
        
        // Converti markdown in HTML
        const htmlContent = marked.parse(markdownText);
        
        // Inserisci nel contenitore
        contentDiv.innerHTML = `
            <div class="markdown-content">
                ${htmlContent}
            </div>
        `;
        
        // Processa i diagrammi Mermaid
        processMermaidDiagrams();
        
        // Processa i link interni
        processInternalLinks();
        
        // Processa le immagini
        processImages();
        
        // Aggiorna la sidebar
        updateSidebar(pageId);
        
        // Scrolla in alto
        window.scrollTo(0, 0);
        
    } catch (error) {
        console.error('Errore nel caricamento:', error);
        contentDiv.innerHTML = `
            <div class="card">
                <h1>Errore di caricamento</h1>
                <p>Impossibile caricare la pagina: ${PAGES[pageId]}</p>
                <p>${error.message}</p>
                <a href="#/home" class="nav-button">Torna alla Home</a>
            </div>
        `;
    }
}

// Funzione per processare i diagrammi Mermaid
function processMermaidDiagrams() {
    const mermaidElements = document.querySelectorAll('.mermaid');
    if (mermaidElements.length > 0) {
        mermaidElements.forEach(element => {
            // Pulisci e re-inizializza
            const originalCode = element.textContent;
            element.innerHTML = '';
            element.textContent = originalCode;
        });
        
        try {
            mermaid.init(undefined, mermaidElements);
            
            // Aggiungi gestori di click per i diagrammi Mermaid con link
            mermaidElements.forEach(element => {
                const links = element.querySelectorAll('a');
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#/')) {
                        link.style.cursor = 'pointer';
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            const targetPage = href.substring(2);
                            window.location.hash = '#/' + targetPage;
                        });
                    }
                });
            });
        } catch (error) {
            console.error('Errore nel renderizzare Mermaid:', error);
        }
    }
}

// Funzione per processare i link interni
function processInternalLinks() {
    const links = document.querySelectorAll('#content a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Se è un link a un file .md
        if (href && href.endsWith('.md') && !href.startsWith('http')) {
            const pageName = href.replace('.md', '').replace('./', '');
            if (PAGES[pageName]) {
                link.setAttribute('href', `#/${pageName}`);
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.hash = '#/' + pageName;
                });
            }
        }
        
        // Se è un link hash (#/)
        else if (href && href.startsWith('#/')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetPage = href.substring(2);
                window.location.hash = '#/' + targetPage;
            });
        }
        
        // Aggiungi classe per stili
        link.classList.add('content-link');
    });
}

// Funzione per processare le immagini
function processImages() {
    const images = document.querySelectorAll('#content img');
    images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '5px';
        img.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
}

// Funzione per caricare la sidebar
async function loadSidebar() {
    try {
        const response = await fetch('sidebar.md');
        if (!response.ok) return;
        
        const markdown = await response.text();
        const sidebarDiv = document.getElementById('sidebar-container');
        const html = marked.parse(markdown);
        
        sidebarDiv.innerHTML = `
            <div class="logo">Organizzazione d'Impresa</div>
            <div class="sidebar-content">
                ${html}
            </div>
        `;
        
        // Processa i link della sidebar
        const sidebarLinks = sidebarDiv.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.classList.add('nav-link');
            
            const href = link.getAttribute('href');
            if (href && href.startsWith('#/')) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.hash = href;
                });
            }
        });
        
    } catch (error) {
        console.error('Errore nel caricamento sidebar:', error);
    }
}

// Funzione per aggiornare lo stato attivo nella sidebar
function updateSidebar(activePage) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#/${activePage}`) {
            link.classList.add('active');
        }
    });
}

// Gestione del routing
function handleRouting() {
    // Estrai la pagina dall'hash
    const hash = window.location.hash;
    let pageId = 'home';
    
    if (hash && hash.startsWith('#/')) {
        pageId = hash.substring(2);
    }
    
    // Carica la pagina
    loadPage(pageId);
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    // Carica la sidebar
    loadSidebar();
    
    // Gestisci il routing iniziale
    handleRouting();
    
    // Ascolta i cambiamenti dell'hash
    window.addEventListener('hashchange', handleRouting);
});
