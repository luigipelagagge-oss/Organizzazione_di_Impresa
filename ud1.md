# U.D. 4.1 – L’Azienda e il Sistema Integrato

## 1. L'Azienda come Sistema Complesso
Non possiamo vedere l'azienda solo come "produzione di beni". Oggi un'azienda moderna è un sistema di processi interconnessi.

Immaginiamo la **"ElectroTech S.p.A."**, un'azienda fittizia del settore impianti.

### I tre pilastri normativi (Sistema Integrato)
Questa azienda adotta un **S.G.I.** che unisce tre certificazioni:
1.  **QUALITÀ (ISO 9001)**
2.  **SICUREZZA (ISO 45001)**
3.  **AMBIENTE (ISO 14001)**

## 2. L'Organigramma Funzionale (Completo)
> **Istruzione:** 🖱️ **Passa il mouse** sulle caselle per leggere la definizione rapida. **Clicca** per andare al dettaglio.

```mermaid
graph TD
    %% --- VERTICE ---
    DL["DIREZIONE GENERALE<br>(Datore di Lavoro)"]:::boss

    %% --- STAFF ---
    subgraph SGI [Ufficio Q.H.S.E.]
        RSPP["RSPP & SICUREZZA"]:::safety
        QUAL["QUALITÀ"]:::quality
        AMB["AMBIENTE"]:::env
    end

    %% --- DIRIGENZA ---
    DTEC["DIRETTORE TECNICO<br>(Dirigente)"]:::manager
    DAMM["DIR. AMMINISTRATIVO<br>(Dirigente)"]:::manager
    DCOM["DIR. COMMERCIALE<br>(Dirigente)"]:::manager

    %% --- REPARTI E UFFICI ---
    ACQ["Ufficio Acquisti"]:::office
    MKT["Vendite & Marketing"]:::office
    
    CPROD["CAPO REPARTO<br>(Preposto)"]:::super
    CMAN["CAPO MANUTENZIONE<br>(Preposto)"]:::super

    %% --- OPERATIVI ---
    OP1["Operai Produzione<br>(Lavoratori)"]:::worker
    OP2["Tecnici Manutentori<br>(Lavoratori)"]:::worker

    %% --- COLLEGAMENTI ---
    DL ==> DTEC
    DL ==> DAMM
    DL ==> DCOM

    DAMM --> ACQ
    DCOM --> MKT

    DTEC ==> CPROD
    DTEC ==> CMAN

    CPROD ==> OP1
    CMAN ==> OP2

    %% Relazioni Staff
    DL -.-> SGI
    SGI -.-> DTEC

    %% --- INTERATTIVITÀ ---
    click DL "/#/ud1?id=tabella-ruoli" "DATORE DI LAVORO: Decide e spende."
    click DTEC "/#/ud1?id=tabella-ruoli" "DIRIGENTE: Organizza la produzione."
    click CPROD "/#/ud1?id=tabella-ruoli" "PREPOSTO: Vigila sulla linea."
    click CMAN "/#/ud1?id=tabella-ruoli" "PREPOSTO: Vigila sulla manutenzione."
    click OP1 "/#/ud1?id=tabella-ruoli" "LAVORATORE: Produce."
    click OP2 "/#/ud1?id=tabella-ruoli" "LAVORATORE: Ripara e mantiene."

    %% --- STILI ---
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef manager fill:#0056b3,color:#fff;
    classDef super fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef safety fill:#dc3545,color:#fff;
    classDef quality fill:#ffc107,color:#000;
    classDef env fill:#28a745,color:#fff;
    classDef office fill:#e2e6ea,stroke:#333,stroke-dasharray: 5 5; 
