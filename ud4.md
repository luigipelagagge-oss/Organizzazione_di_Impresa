# 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

## 1. ⚖️ Il Riferimento Legislativo
La sicurezza non è un'opzione, ma un obbligo definito dal **Testo Unico (D.Lgs 81/08)**.

> **FONTE UFFICIALE:**
> 🔗 **[Consulta il D.Lgs 81/08 sulla Gazzetta Ufficiale](https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s)**

---

## 2. 🛡️ Concetti Chiave: Prevenzione vs Protezione

È fondamentale distinguere questi due termini:

| Concetto | Definizione | Esempio |
| :--- | :--- | :--- |
| **🛡️ PREVENZIONE** | Azioni per **evitare** l'incidente (abbassa la probabilità). | Formazione, manutenzione, segnaletica. |
| **⛑️ PROTEZIONE** | Strumenti per **limitare i danni** (abbassa la gravità). | Casco, scarpe antinfortunistiche, estintori. |

---

## 3. 🗺️ Mappa Interattiva: Ruoli e Relazioni

Clicca sulle caselle per approfondire. Le frecce indicano **chi nomina**, **chi elegge** e **chi controlla**.

```mermaid
graph TD
    %% ==========================================
    %%    SUBGRAPH 1: I DOCUMENTI
    %% ==========================================
    subgraph Documenti ["📄 I DOCUMENTI"]
        direction TB
        NORMA("⚖️ D.Lgs 81/08<br>(Legge)"):::doc_law
        DVR("⚠️ D.V.R.<br>(Valutazione Rischi)"):::doc_dvr
        POS("🏗️ P.O.S.<br>(Piano Operativo)"):::doc_pos

        NORMA --> DVR --> POS
    end

    %% ==========================================
    %%    SUBGRAPH 2: LE PERSONE
    %% ==========================================
    subgraph Persone ["👥 L'ORGANIGRAMMA"]
        direction TB
        
        %% --- LIVELLO APICALE ---
        DL[💼 Datore di Lavoro]:::boss 
        RSPP[📐 R.S.P.P.]:::staff
        MC[🩺 Medico Comp.]:::staff
        RLS[🗣️ R.L.S.]:::rep

        %% --- NODO RIUNIONE ---
        MEETING((🤝 Riunione<br>Art. 35)):::meeting

        %% --- RELAZIONI STAFF (I VERBI) ---
        DL -- Nomina --> RSPP
        DL -- Nomina --> MC
        
        RSPP -. Fornisce Consulenza .-> DL
        MC -. Collabora .-> DL
        DL -. Si consulta .-> RLS

        %% --- COLLEGAMENTI ALLA RIUNIONE ---
        DL -. Partecipa .-> MEETING
        RSPP -. Partecipa .-> MEETING
        MC -. Partecipa .-> MEETING
        RLS -. Partecipa .-> MEETING

        %% --- LINEA GERARCHICA (I VERBI) ---
        DIR[👔 Dirigente]:::man
        PRE[👷‍♂️ Preposto]:::man
        LAV[👷 Lavoratore]:::worker

        DL == Delega ==> DIR
        DIR == Vigila ==> PRE
        PRE == Sovrintende ==> LAV
        
        %% --- ELEZIONE RLS ---
        LAV -. Eleggono .-> RLS
    end

    %% ==========================================
    %%    LINK (INTERAZIONI)
    %% ==========================================
    
    click NORMA "def_norme.md" "Vai a Normativa"
    click DVR "def_dvr.md" "Vai a DVR"
    click POS "def_pos.md" "Vai a POS"

    click DL "def_datore.md" "Vai a Datore"
    click RLS "def_rls.md" "Vai a RLS"
    click RSPP "def_rspp.md" "Vai a RSPP"
    click MC "def_medico.md" "Vai a Medico"
    click DIR "def_dirigente.md" "Vai a Dirigente"
    click PRE "def_preposto.md" "Vai a Preposto"
    click LAV "def_lavoratore.md" "Vai a Lavoratore"
    click MEETING "#riunione-periodica-art-35" "Vai a Riunione Periodica"

    %% ==========================================
    %%    STILI GRAFICI
    %% ==========================================
    classDef boss fill:#1a237e,color:#fff,stroke-width:2px
    classDef man fill:#5c6bc0,color:#fff
    classDef worker fill:#fff,stroke:#333
    classDef staff fill:#0288d1,color:#fff,stroke-dasharray: 5 5
    classDef rep fill:#f57f17,color:#fff,stroke:#333
    
    classDef meeting fill:#e1bee7,stroke:#8e24aa,stroke-width:2px,color:#000
    
    classDef doc_law fill:#2c3e50,color:#fff,stroke:#f1c40f,stroke-width:2px
    classDef doc_dvr fill:#e67e22,color:#fff,stroke:#333,stroke-width:2px
    classDef doc_pos fill:#27ae60,color:#fff,stroke:#333,stroke-width:2px
