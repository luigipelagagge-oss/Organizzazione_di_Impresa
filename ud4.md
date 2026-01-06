# 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

## 1. Il Riferimento Legislativo
La sicurezza non è un'opzione, ma un obbligo definito dal **Testo Unico (D.Lgs 81/08)**.

> **FONTE UFFICIALE:**
> 🔗 **[Consulta il D.Lgs 81/08 sulla Gazzetta Ufficiale](https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s)**

---

## 2. Concetti Chiave: Prevenzione vs Protezione

| Concetto | Definizione | Esempio |
| :--- | :--- | :--- |
| **🛡️ PREVENZIONE** | Azioni per **evitare** l'incidente (abbassa la probabilità). | Formazione, manutenzione, segnaletica. |
| **⛑️ PROTEZIONE** | Strumenti per **limitare i danni** (abbassa la gravità). | Casco, scarpe antinfortunistiche, estintori. |

---

## 3. L'Organizzazione (Mappa Interattiva)

> **Istruzione:** Clicca sulle caselle per aprire le schede di dettaglio.

<br>

```mermaid
graph TD
    %% ==========================================
    %%   SUBGRAPH 1: LE PERSONE
    %% ==========================================
    subgraph Persone ["👥 L'ORGANIGRAMMA"]
        direction TB
        DL["DATORE DI LAVORO"]:::boss
        DIR["DIRIGENTE"]:::man
        PRE["PREPOSTO"]:::man
        LAV["LAVORATORE"]:::worker

        RSPP["RSPP"]:::staff
        MC["MEDICO COMP."]:::staff
        RLS["RLS"]:::rep

        DL --> DIR --> PRE --> LAV
        DL -.-> RSPP
        DL -.-> MC
        LAV -.-> RLS
    end

    %% ==========================================
    %%   SUBGRAPH 2: I DOCUMENTI
    %% ==========================================
    subgraph Documenti ["📄 I DOCUMENTI"]
        direction TB
        NORMA("⚖️ D.Lgs 81/08<br>(Legge)"):::doc_law
        DVR("⚠️ D.V.R.<br>(Valutazione Rischi)"):::doc_dvr
        POS("🏗️ P.O.S.<br>(Piano Operativo)"):::doc_pos

        NORMA --> DVR --> POS
    end

    %% ==========================================
    %%   INTERAZIONI (LINK CON HASH)
    %% ==========================================
    
    %% --- PERSONE ---
    click DL "#/def_datore" "Apri scheda: Datore"
    click DIR "#/def_dirigente" "Apri scheda: Dirigente"
    click PRE "#/def_preposto" "Apri scheda: Preposto"
    click LAV "#/def_lavoratore" "Apri scheda: Lavoratore"
    
    %% --- STAFF ---
    click RSPP "#/def_rspp" "Apri scheda: RSPP"
    click MC "#/def_medico" "Apri scheda: Medico"
    click RLS "#/def_rls" "Apri scheda: RLS"

    %% --- DOCUMENTI ---
    click NORMA "#/def_norme" "Apri scheda: Normativa"
    click DVR "#/def_dvr" "Apri scheda: DVR"
    click POS "#/def_pos" "Apri scheda: POS"
    
    %% ==========================================
    %%   STILI
    %% ==========================================
    classDef boss fill:#000,color:#fff,stroke-width:2px;
    classDef man fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000;
    classDef doc_law fill:#2c3e50,color:#fff,stroke:#f1c40f,stroke-width:2px;
    classDef doc_dvr fill:#e67e22,color:#fff,stroke:#333,stroke-width:2px;
    classDef doc_pos fill:#27ae60,color:#fff,stroke:#333,stroke-width:2px;
