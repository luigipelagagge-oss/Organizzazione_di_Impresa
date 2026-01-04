  # U.D. 4.4 – L'Organigramma della Sicurezza (D.Lgs 81/08)

## La Mappa delle Responsabilità
> **Istruzione:** Clicca sulle figure per aprire la **Scheda di Dettaglio**.
> Leggi le scritte sulle frecce per capire le azioni giuridiche.

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

    %% --- COLLEGAMENTI GERARCHICI (Con etichette ripristinate) ---
    DL ==>|Delega e Direttive| DIR
    DIR ==>|Organizza| PRE
    PRE ==>|Vigila e Sovrintende| LAV

    %% --- COLLEGAMENTI FUNZIONALI (Con etichette ripristinate) ---
    DL -.->|Nomina| RSPP
    DL -.->|Nomina| MC
    RSPP -.->|Consiglia| DL
    MC -.->|Visita| LAV
    LAV -.->|Elegge| RLS
    RLS -.->|Consulta| DL

    %% --- LINK ALLE SCHEDE DETTAGLIATE ---
    click DL "/#/def_datore" "Apri scheda: DATORE DI LAVORO"
    click DIR "/#/def_dirigente" "Apri scheda: DIRIGENTE"
    click PRE "/#/def_preposto" "Apri scheda: PREPOSTO"
    click LAV "/#/def_lavoratore" "Apri scheda: LAVORATORE"
    click RSPP "/#/def_rspp" "Apri scheda: RSPP"
    click MC "/#/def_medico" "Apri scheda: MEDICO"
    click RLS "/#/def_rls" "Apri scheda: RLS"

    %% --- STILI ---
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef man fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000;
