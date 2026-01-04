  # U.D. 4.4 – L'Organigramma della Sicurezza (D.Lgs 81/08)

## La Mappa delle Responsabilità
> **Istruzione:** Clicca sulle figure per aprire la **Scheda di Dettaglio**.

```mermaid
graph TD
    %% --- NODI ---
    DL["DATORE DI LAVORO<br>(Il Decisore)"]:::boss
    DIR["DIRIGENTE<br>(L'Organizzatore)"]:::man
    PRE["PREPOSTO<br>(Il Controllore)"]:::man
    LAV["LAVORATORE<br>(L'Esecutore)"]:::worker

    %% --- STAFF ---
    RSPP["RSPP<br>(Consulente)"]:::staff
    MC["MEDICO COMP.<br>(Sanitario)"]:::staff
    RLS["RLS<br>(Rappresentante)"]:::rep

    %% --- COLLEGAMENTI GERARCHICI ---
    DL ==>|Delega e Direttive| DIR
    DIR ==>|Organizza| PRE
    PRE ==>|Vigila e Sovrintende| LAV

    %% --- COLLEGAMENTI FUNZIONALI ---
    DL -.->|Nomina| RSPP
    DL -.->|Nomina| MC
    RSPP -.->|Consiglia| DL
    MC -.->|Visita| LAV
    LAV -.->|Elegge| RLS
    RLS -.->|Consulta| DL

    %% --- LINK ALLE SCHEDE (VERSIONE CORRETTA) ---
    %% Nota: C'è solo il cancelletto #, senza lo slash davanti.
    
    click DL "#/def_datore" "Scheda: DATORE DI LAVORO"
    click DIR "#/def_dirigente" "Scheda: DIRIGENTE"
    click PRE "#/def_preposto" "Scheda: PREPOSTO"
    click LAV "#/def_lavoratore" "Scheda: LAVORATORE"
    click RSPP "#/def_rspp" "Scheda: RSPP"
    click MC "#/def_medico" "Scheda: MEDICO"
    click RLS "#/def_rls" "Scheda: RLS"

    %% --- STILI ---
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef man fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000;
