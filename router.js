// Mappa delle pagine disponibili
const pages = {
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

// Configurazione di marked per renderizzare correttamente il markdown
marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true
});

// Funzione per caricare e renderizzare markdown
async function loadPage(pageId) {
    const contentDiv = document.getElementById('content');
    
    // Mostra un caricamento temporaneo
    contentDiv.innerHTML = '<div style="text-align: center; padding: 50px;"><p>Caricamento...</p></div>';
    
    if (!pages[pageId]) {
        contentDiv.innerHTML = `
            <div class="card">
                <h1>Pagina non trovata</h1>
                <p>La pagina richiesta non esiste.</p>
                <a href="#/home" class="nav-button">Torna alla Home</a>
            </div>
        `;
        return;
    }
    
    try {
        const response = await fetch(pages[pageId]);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        
        // Converti markdown in HTML
        const html = marked.parse(markdown);
        contentDiv.innerHTML = html;
        
        // Inizializza Mermaid per i diagrammi
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ 
                startOnLoad: true,
                theme: 'default',
                flowchart: { 
                    useMaxWidth: true,
                    htmlLabels: true
                }
            });
            mermaid.init(undefined, '.mermaid');
        }
        
        // Processa i link interni per utilizzare il routing
        processInternalLinks();
        
        // Aggiorna l'URL nella barra degli indirizzi
        window.history.replaceState(null, '', `#/${pageId}`);
        
        // Aggiorna la sidebar
        updateSidebar(pageId);
        
    } catch (error) {
        console.error('Errore nel caricamento:', error);
        contentDiv.innerHTML = `
            <div class="card">
                <h1>Errore nel caricamento</h1>
                <p>Impossibile caricare la pagina: ${pages[pageId]}</p>
                <p>${error.message}</p>
                <a href="#/home" class="nav-button">Torna alla Home</a>
            </div>
        `;
    }
}

// Funzione per processare i link interni
function processInternalLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Se è un link a un file .md locale
        if (href && href.endsWith('.md') && !href.startsWith('http')) {
            // Converti il percorso in ID pagina
            const pageName = href.replace('.md', '').replace('./', '');
            
            if (pages[pageName]) {
                link.setAttribute('href', `#/${pageName}`);
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    loadPage(pageName);
                });
            }
        }
        
        // Se è già un link hash (#/)
        else if (href && href.startsWith('#/')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = href.substring(2); // Rimuove '#/'
                loadPage(pageId);
            });
        }
    });
}

// Funzione per caricare la sidebar
async function loadSidebar() {
    try {
        const response = await fetch('sidebar.md');
        if (!response.ok) return;
        
        const markdown = await response.text();
        const sidebarDiv = document.getElementById('sidebar');
        sidebarDiv.innerHTML = marked.parse(markdown);
        
        // Aggiungi stili ai link della sidebar
        const sidebarLinks = sidebarDiv.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.classList.add('nav-link');
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href && href.startsWith('#/')) {
                    const pageId = href.substring(2);
                    loadPage(pageId);
                }
            });
        });
    } catch (error) {
        console.error('Errore nel caricamento della sidebar:', error);
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

// Gestione del routing iniziale
function initRouter() {
    // Carica la sidebar
    loadSidebar();
    
    // Gestisci il cambio dell'hash
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(2) || 'home';
        loadPage(hash);
    });
    
    // Carica la pagina iniziale
    const initialPage = window.location.hash.substring(2) || 'home';
    loadPage(initialPage);
}

// Inizializza il router quando la pagina è caricata
document.addEventListener('DOMContentLoaded', initRouter);
