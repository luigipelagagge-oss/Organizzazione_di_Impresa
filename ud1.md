# U.D. 4.1 – L’Azienda e il Sistema Integrato

## 1. L'Azienda come Sistema Complesso
Non possiamo vedere l'azienda solo come "produzione di beni". Oggi un'azienda moderna (specialmente nel settore tecnologico/elettrico) è un sistema di processi interconnessi che devono rispettare normative rigide.

Immaginiamo la **"ElectroTech S.p.A."**, un'azienda fittizia del settore impianti.

### I tre pilastri normativi (Sistema Integrato)
Questa azienda adotta un **S.G.I. (Sistema di Gestione Integrato)** che unisce tre certificazioni fondamentali:

1.  **QUALITÀ (ISO 9001):** "Soddisfare il cliente e migliorare i processi."
2.  **SICUREZZA (ISO 45001):** "Proteggere i lavoratori da infortuni e malattie." (Ex OHSAS 18001)
3.  **AMBIENTE (ISO 14001):** "Ridurre l'inquinamento e l'impatto ambientale."

## 2. L'Organigramma Funzionale e Gerarchico
In questo schema vediamo sia le **funzioni aziendali** (chi fa cosa) sia i **ruoli della sicurezza** (chi risponde penalmente secondo il D.Lgs 81/08).

*Nota: Le etichette tra parentesi indicano il ruolo ai fini della Sicurezza.*

```mermaid
graph TD
    %% --- LIVELLO 1: VERTICE ---
    DL["**DIREZIONE GENERALE**<br>(Datore di Lavoro)"]:::boss
    
    %% --- LIVELLO STAFF (QSA) ---
    subgraph SGI ["Ufficio Q.H.S.E. - Staff al Datore"]
        RSPP["**RSPP & SICUREZZA**<br>ISO 45001"]:::safety
        QUAL["**QUALITÀ**<br>ISO 9001"]:::quality
        AMB["**AMBIENTE**<br>ISO 14001"]:::env
    end

    %% --- LIVELLO 2: DIRIGENZA (Line) ---
    D_TECNICO["**DIRETTORE TECNICO**<br>(Dirigente)"]:::manager
    D_AMM["**DIR. AMMINISTRATIVO**<br>(Dirigente)"]:::manager
    D_COMM["**DIR. COMMERCIALE**<br>(Dirigente)"]:::manager

    %% --- LIVELLO 3: PREPOSTI (Middle Management) ---
    C_PROD["**CAPO REPARTO PRODUZIONE**<br>(Preposto)"]:::super
    C_MAN["**CAPO SQUADRA MANUTENZIONE**<br>(Preposto)"]:::super
    UFF_ACQ["Ufficio Acquisti & Contabilità"]:::office
    VEND["Vendite & Marketing"]:::office

    %% --- LIVELLO 4: OPERATIVI ---
    OP_PROD("Operai Specializzati<br>(Lavoratori)"):::worker
    OP_MAN("Tecnici Manutentori<br>(Lavoratori)"):::worker

    %% --- COLLEGAMENTI ---
    DL ==> D_TECNICO
    DL ==> D_AMM
    DL ==> D_COMM
    
    %% Relazioni Staff (Consulenza)
    DL -.-> SGI
    SGI -.->|Procedure e Controlli| D_TECNICO

    %% Relazioni Linea Tecnica
    D_TECNICO ==> C_PROD
    D_TECNICO ==> C_MAN
    
    C_PROD ==> OP_PROD
    C_MAN ==> OP_MAN

    %% Relazioni Altri Reparti
    D_AMM --> UFF_ACQ
    D_COMM --> VEND

    %% --- STILI ---
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef manager fill:#0056b3,color:#fff;
    classDef super fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef safety fill:#dc3545,color:#fff;
    classDef quality fill:#ffc107,color:#000;
    classDef env fill:#28a745,color:#fff;
    classDef office fill:#e2e6ea,stroke:#333,stroke-dasharray: 5 5;
