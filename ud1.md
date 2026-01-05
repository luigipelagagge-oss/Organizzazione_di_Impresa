 # 4.1 L’Azienda e il Sistema Integrato

## 1. L'Azienda come Sistema Complesso
Non possiamo vedere l'azienda solo come "produzione di beni". Oggi un'azienda moderna è un sistema di processi interconnessi.

### Il Sistema di Gestione Integrato (S.G.I.)
Questa azienda fittizia ("ElectroTech S.p.A.") adotta tre certificazioni volontarie che lavorano insieme:

1.  **QUALITÀ (ISO 9001)** -> Per la soddisfazione del cliente.
2.  **SICUREZZA (ISO 45001)** -> Per la salute dei lavoratori.
3.  **AMBIENTE (ISO 14001)** -> Per la tutela del pianeta.

## 2. L'Organigramma Funzionale
> **Istruzione:** Clicca sulle caselle colorate (Staff SGI) o sui Ruoli (Direttori, Capi) per aprire le schede di dettaglio.

```mermaid
graph TD
    %% --- VERTICE ---
    DL["DIREZIONE GENERALE<br>(Datore di Lavoro)"]:::boss

    %% --- STAFF SGI (SISTEMA INTEGRATO) ---
    subgraph SGI [Ufficio Q.H.S.E. - Sistema Integrato]
        QUAL["QUALITÀ<br>(ISO 9001)"]:::quality
        SIC["SICUREZZA<br>(ISO 45001)"]:::safety
        AMB["AMBIENTE<br>(ISO 14001)"]:::env
    end

    %% --- DIRIGENZA ---
    %% Definiti in ordine per forzare il posizionamento da sx a dx
    DTEC["DIRETTORE TECNICO"]:::manager
    DAMM["DIR. AMMINISTRATIVO"]:::manager
    DCOM["DIR. COMMERCIALE"]:::manager
    DHR["DIR. RISORSE UMANE<br>(HR)"]:::manager

    %% --- REPARTI E UFFICI ---
    ACQ["Ufficio Acquisti"]:::office
    MKT["Vendite & Marketing"]:::office
    UPERS["Ufficio Personale<br>& Formazione"]:::office
    
    CPROD["CAPO REPARTO<br>(Produzione)"]:::super
    CMAN["CAPO MANUTENZIONE"]:::super

    %% --- OPERATIVI ---
    OP1["Operai Produzione"]:::worker
    OP2["Tecnici Manutentori"]:::worker

    %% --- COLLEGAMENTI GERARCHICI ---
    %% L'ordine qui determina la posizione sinistra-destra
    DL ==> DTEC
    DL ==> DAMM
    DL ==> DCOM
    DL ==> DHR

    %% Sottorami
    DAMM --> ACQ
    DCOM --> MKT
    DHR --> UPERS

    DTEC ==> CPROD
    DTEC ==> CMAN

    CPROD ==> OP1
    CMAN ==> OP2

    %% --- COLLEGAMENTI DI STAFF (SGI) ---
    DL -.-> SGI
    SGI -.->|Procedure e Controlli| DTEC
    SGI -.->|Audit| DAMM
    SGI -.->|Formazione Obbligatoria| DHR

    %% --- LINK INTERATTIVI (TUTTI ATTIVI) ---
    
    %% 1. Norme ISO
    click QUAL "#/def_iso_9001" "Apri ISO 9001 (Qualità)"
    click SIC "#/def_iso_45001" "Apri ISO 45001 (Sicurezza)"
    click AMB "#/def_iso_14001" "Apri ISO 14001 (Ambiente)"
    
    %% 2. Datore di Lavoro
    click DL "#/def_datore" "Apri Ruolo Datore"

    %% 3. Dirigenti
    click DTEC "#/def_dirigente" "Apri Ruolo Dirigente"
    click DAMM "#/def_dirigente" "Apri Ruolo Dirigente"
    click DCOM "#/def_dirigente" "Apri Ruolo Dirigente"
    click DHR "#/def_dirigente" "Apri Ruolo Dirigente"

    %% 4. Preposti
    click CPROD "#/def_preposto" "Apri Ruolo Preposto"
    click CMAN "#/def_preposto" "Apri Ruolo Preposto"

    %% 5. Lavoratori
    click OP1 "#/def_lavoratore" "Apri Ruolo Lavoratore"
    click OP2 "#/def_lavoratore" "Apri Ruolo Lavoratore"

    %% --- STILI ---
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef manager fill:#0056b3,color:#fff;
    classDef super fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    
    classDef safety fill:#dc3545,color:#fff,stroke-width:2px,stroke:#fff;
    classDef quality fill:#ffc107,color:#000,stroke-width:2px,stroke:#fff;
    classDef env fill:#28a745,color:#fff,stroke-width:2px,stroke:#fff;
    
    classDef office fill:#e2e6ea,stroke:#333,stroke-dasharray: 5 5;
