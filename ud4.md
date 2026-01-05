 # 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

La sicurezza in azienda si basa su due pilastri: l'**Organigramma delle Persone** (chi ha le responsabilità) e il **Sistema Documentale** (i documenti obbligatori per legge).

---

## La Mappa Completa: Persone e Documenti
> **Istruzione:** Clicca sulle caselle per aprire la scheda di dettaglio o leggere la definizione.

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
        NORMA("⚖️ D.Lgs 81/08<br>(La Legge)"):::doc_law
        DVR("⚠️ D.V.R.<br>(Valutazione Rischi)"):::doc_dvr
        POS("🏗️ P.O.S.<br>(Piano Operativo)"):::doc_pos

        %% --- FLUSSI (Sintassi corretta con virgolette) ---
        NORMA == "Impone" ==> DVR
        DVR == "Genera (per cantieri)" ==> POS
    end

    %% ==========================================
    %%  INTERAZIONI (CLICK)
    %% ==========================================
    %% Link Persone (Puntano alle pagine dedicate)
    click DL "#/def_datore" "Scheda: Datore di Lavoro"
    click DIR "#/def_dirigente" "Scheda: Dirigente"
    click PRE "#/def_preposto" "Scheda: Preposto"
    click LAV "#/def_lavoratore" "Scheda: Lavoratore"
    click RSPP "#/def_rspp" "Scheda: RSPP"
    click MC "#/def_medico" "Scheda: Medico"
    click RLS "#/def_rls" "Scheda: RLS"

    %% Link Documenti (Puntano alle ancore
