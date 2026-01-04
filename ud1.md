# U.D. 4.1 – L’Azienda e il Sistema Integrato

## 1. L'Azienda come Sistema Complesso
Non possiamo vedere l'azienda solo come "produzione di beni". Oggi un'azienda moderna è un sistema di processi interconnessi.

Immaginiamo la **"ElectroTech S.p.A."**, un'azienda fittizia del settore impianti.

### I tre pilastri normativi (Sistema Integrato)
Questa azienda adotta un **S.G.I.** che unisce tre certificazioni:
1.  **QUALITÀ (ISO 9001)**
2.  **SICUREZZA (ISO 45001)**
3.  **AMBIENTE (ISO 14001)**

## 2. L'Organigramma Funzionale
> **Istruzione:** Passa con il mouse sui ruoli per vedere la definizione rapida. Clicca per andare alla tabella dettagliata.

```mermaid
graph TD
    %% VERTICE
    DL["DIREZIONE GENERALE<br>(Datore di Lavoro)"]:::boss
    
    %% STAFF
    subgraph SGI [Ufficio Q.H.S.E.]
        RSPP["RSPP & SICUREZZA"]:::safety
        QUAL["QUALITÀ"]:::quality
        AMB["AMBIENTE"]:::env
    end

    %% LINEA
    DL ==> D_TEC["DIRETTORE TECNICO<br>(Dirigente)"]:::manager
    DL ==> D_AMM["DIR. AMMINISTRATIVO"]:::manager
    
    D_TEC ==> C_PROD["CAPO REPARTO<br>(Preposto)"]:::super
    C_PROD ==> OP["OPERAI<br>(Lavoratori)"]:::worker

    %% COLLEGAMENTI STAFF
    DL -.-> SGI
    SGI -.-> D_TEC

    %% --- INTERATTIVITÀ (Hover & Click) ---
    %% Sintassi: click ID "URL" "TESTO CHE APPARE AL PASSAGGIO DEL MOUSE"
    
    click DL "/#/ud1?id=tabella-ruoli" "DATORE DI LAVORO: Ha il potere di spesa. Valuta i rischi e firma il DVR."
    click D_TEC "/#/ud1?id=tabella-ruoli" "DIRIGENTE: Organizza il lavoro. Decide i turni e le tecnologie."
    click C_PROD "/#/ud1?id=tabella-ruoli" "PREPOSTO: L'occhio del padrone. Controlla che gli operai usino i DPI."
    click OP "/#/ud1?id=tabella-ruoli" "LAVORATORE: Esegue il lavoro e segnala i pericoli."
    click RSPP "/#/ud1?id=tabella-ruoli" "RSPP: Consulente tecnico. Non comanda, ma scrive le procedure."

    %% STILI
    classDef boss fill:#000,color:#fff;
    classDef manager fill:#0056b3,color:#fff;
    classDef super fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef safety fill:#dc3545,color:#fff;
    classDef quality fill:#ffc107,color:#000;
    classDef env fill:#28a745,color:#fff;  
