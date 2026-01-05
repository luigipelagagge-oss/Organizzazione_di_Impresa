 # 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

La sicurezza in azienda si regge su due pilastri fondamentali: le **Figure Responsabili** (chi gestisce la sicurezza) e i **Documenti Obbligatori** (cosa bisogna produrre).

---

## La Mappa Completa: Persone e Documenti
> **Istruzione:** Clicca sulle caselle per aprire la **Scheda di Dettaglio** o scorrere alla definizione.

```mermaid
graph TD
    %% ==========================================
    %%  SUBGRAPH 1: LE PERSONE (SINISTRA)
    %% ==========================================
    subgraph "👥 L'ORGANIGRAMMA (Chi fa cosa)"
        direction TB
        %% --- NODI PERSONE ---
        DL["DATORE DI LAVORO<br>(Il Decisore)"]:::boss
        DIR["DIRIGENTE<br>(L'Organizzatore)"]:::man
        PRE["PREPOSTO<br>(Il Controllore)"]:::man
        LAV["LAVORATORE<br>(L'Esecutore)"]:::worker

        %% --- STAFF ---
        RSPP["RSPP<br>(Consulente)"]:::staff
        MC["MEDICO COMP.<br>(Sanitario)"]:::staff
        RLS["RLS<br>(Rappresentante)"]:::rep

        %% --- COLLEGAMENTI GERARCHICI ---
        DL ==>|Delega| DIR
        DIR ==>|Organizza| PRE
        PRE ==>|Vigila| LAV

        %% --- COLLEGAMENTI FUNZIONALI ---
        DL -.->|Nomina| RSPP
        DL -.->|Nomina| MC
        RSPP -.->|Consiglia| DL
        MC -.->|Visita| LAV
        LAV -.->|Elegge| RLS
        RLS -.->|Consulta| DL
    end

    %% ==========================================
    %%  SUBGRAPH 2: I DOCUMENTI (DESTRA)
    %% ==========================================
    subgraph "📄 I DOCUMENTI (Cosa serve)"
        direction TB
        %% --- NODI DOCUMENTI ---
        NORMA("⚖️ D.Lgs 81/08<br>(La Legge)"):::doc_law
        DVR("⚠️ D.V.R.<br>(Valutazione Rischi)"):::doc_dvr
        POS("🏗️ P.O.S.<br>(Piano Operativo)"):::doc_pos

        %% --- FLUSSO ---
        NORMA ==>|Impone| DVR
        DVR ==>|Genera (per cantieri)| POS
    end

    %% ==========================================
    %%  INTERAZIONI (LINK)
    %% ==========================================
    %% Link Persone
    click DL "#/def_datore" "Vai alla scheda Datore"
    click DIR "#/def_dirigente" "Vai alla scheda Dirigente"
    click PRE "#/def_preposto" "Vai alla scheda Preposto"
    click LAV "#/def_lavoratore" "Vai alla scheda Lavoratore"
    click RSPP "#/def_rspp" "Vai alla scheda RSPP"
    click MC "#/def_medico" "Vai alla scheda Medico"
    click RLS "#/def_rls" "Vai alla scheda RLS"

    %% Link Documenti (Puntano alle ancore in fondo alla pagina o link esterni)
    click NORMA "[https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/sg](https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/sg)" "Apri Gazzetta Ufficiale"
    click DVR "#/ud4?id=dvr-documento-valutazione-rischi" "Leggi definizione DVR"
    click POS "#/ud4?id=pos-piano-operativo-di-sicurezza" "Leggi definizione POS"

    %% ==========================================
    %%  STILI (CLASSI CSS)
    %% ==========================================
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef man fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000;
    
    %% Stili nuovi per i documenti
    classDef doc_law fill:#2c3e50,color:#fff,stroke:#f1c40f,stroke-width:2px;
    classDef doc_dvr fill:#e67e22,color:#fff,stroke:#333,stroke-width:2px;
    classDef doc_pos fill:#27ae60,color:#fff,stroke:#333,stroke-width:2px;
