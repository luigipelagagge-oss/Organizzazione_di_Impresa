 # 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

La sicurezza in azienda si basa su due pilastri: l'**Organigramma delle Persone** (chi ha le responsabilità) e il **Sistema Documentale** (i documenti obbligatori per legge).

---

## La Mappa Completa: Persone e Documenti
> **Istruzione:** Clicca sulle caselle del grafico per aprire la scheda di dettaglio.

```mermaid
graph TD
    %% ==========================================
    %%  SUBGRAPH 1: LE PERSONE (SINISTRA)
    %% ==========================================
    subgraph Persone ["👥 L'ORGANIGRAMMA (Chi fa cosa)"]
        direction TB
        %% --- NODI ---
        DL["DATORE DI LAVORO<br>(Il Decisore)"]:::boss
        DIR["DIRIGENTE<br>(L'Organizzatore)"]:::man
        PRE["PREPOSTO<br>(Il Controllore)"]:::man
        LAV["LAVORATORE<br>(L'Esecutore)"]:::worker

        %% --- STAFF ---
        RSPP["RSPP<br>(Consulente)"]:::staff
        MC["MEDICO COMP.<br>(Sanitario)"]:::staff
        RLS["RLS<br>(Rappresentante)"]:::rep

        %% --- FLUSSI GERARCHICI ---
        DL ==>|Delega| DIR
        DIR ==>|Organizza| PRE
        PRE ==>|Vigila| LAV

        %% --- FLUSSI FUNZIONALI ---
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
    subgraph Documenti ["📄 I DOCUMENTI (Cosa serve)"]
        direction TB
        %% --- NODI ---
        NORMA("⚖️ D.Lgs 81/08<br>(Clicca per Legge)"):::doc_law
        DVR("⚠️ D.V.R.<br>(Valutazione Rischi)"):::doc_dvr
        POS("🏗️ P.O.S.<br>(Piano Operativo)"):::doc_pos

        %% --- FLUSSI ---
        NORMA == "Impone" ==> DVR
        DVR == "Genera (per cantieri)" ==> POS
    end

    %% ==========================================
    %%  INTERAZIONI (CLICK) - TUTTI PUNTANO A FILE ORA
    %% ==========================================
    
    %% Link Persone
    click DL "#/def_datore" "Scheda: Datore di Lavoro"
    click DIR "#/def_dirigente" "Scheda: Dirigente"
    click PRE "#/def_preposto" "Scheda: Preposto"
    click LAV "#/def_lavoratore" "Scheda: Lavoratore"
    click RSPP "#/def_rspp" "Scheda: RSPP"
    click MC "#/def_medico" "Scheda: Medico"
    click RLS "#/def_rls" "Scheda: RLS"

    %% Link Documenti (ORA PUNTANO AI NUOVI FILE)
    click NORMA "#/def_norme" "Vai alle Fonti Normative"
    click DVR "#/def_dvr" "Vai alla scheda DVR"
    click POS "#/def_pos" "Vai alla scheda POS"

    %% ==========================================
    %%  STILI (CSS)
    %% ==========================================
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef man fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000;
    
    classDef doc_law fill:#2c3e50,color:#fff,stroke:#f1c40f,stroke-width:2px;
    classDef doc_dvr fill:#e67e22,color:#fff,stroke:#333,stroke-width:2px;
    classDef doc_pos fill:#27ae60,color:#fff,stroke:#333,stroke-width:2px;
