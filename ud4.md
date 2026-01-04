 # U.D. 4.4 – L'Organigramma della Sicurezza (D.Lgs 81/08)

## La Mappa delle Responsabilità
Clicca su una figura per aprire la sua **Scheda Tecnica** con compiti, sanzioni e approfondimenti.

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

    %% --- COLLEGAMENTI ---
    DL ==> DIR ==> PRE ==> LAV
    DL -.-> RSPP
    DL -.-> MC
    LAV -.-> RLS
    RLS -.-> DL

    %% --- LINK ALLE NUOVE PAGINE ---
    %% Nota come ora i link puntano a file specifici (def_...)
    
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
