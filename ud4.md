# 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

## 1. Il Riferimento Legislativo
La sicurezza non è un'opzione, ma un obbligo definito dal **Testo Unico (D.Lgs 81/08)**.

Abbiamo due livelli di approfondimento:
* **Fonte Ufficiale:** Il testo di legge puro (complesso ma autorevole).
* **Fonte Didattica:** La spiegazione dei concetti chiave (Wikipedia).

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <a href="https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s" style="background-color: #2c3e50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
    🏛️ Leggi su Gazzetta Ufficiale
  </a>
  <a href="https://it.wikipedia.org/wiki/Testo_unico_sulla_sicurezza_sul_lavoro" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
    📖 Leggi su Wikipedia
  </a>
</div>

---

## 2. I Concetti Chiave: Prevenzione vs Protezione
Prima di vedere i ruoli, è fondamentale capire la logica della legge.

| Concetto | Definizione | Esempio |
| :--- | :--- | :--- |
| **🛡️ PREVENZIONE** | Tutto ciò che facciamo per **evitare** che accada un incidente. Agisce sulla probabilità. | Formazione, manutenzione macchine, pause, segnaletica. |
| **⛑️ PROTEZIONE** | Tutto ciò che usiamo per **limitare i danni** se l'incidente accade comunque. | Casco, scarpe antinfortunistiche, imbragature, estintori. |

> *"La Prevenzione salva dalla causa, la Protezione salva dall'effetto."*

---

## 3. L'Organizzazione (Mappa Interattiva)
La sicurezza si basa su **Persone** (chi ha le responsabilità) e **Documenti** (cosa bisogna scrivere).

> **Istruzione:** Clicca sulle caselle per aprire le schede interne o i link di approfondimento.

```mermaid
graph TD
    %% ==========================================
    %%   SUBGRAPH 1: LE PERSONE (SINISTRA)
    %% ==========================================
    subgraph Persone ["👥 L'ORGANIGRAMMA (Chi fa cosa)"]
        direction TB
        %% --- NODI ---
        DL["DATORE DI LAVORO<br>(Il Decisore)"]:::boss
        DIR["DIRIGENTE<br>(L'Organizzatore)"]:::man
        PRE["PREPOSTO<br>(Il Controllore)"]:::man
        LAV["LAVORATORE<br>(L'Esecutore)"]:::worker

        %% --- STAFF ---
        RSPP["RSPP<br>(Tecnico Sicurezza)"]:::staff
        MC["MEDICO COMP.<br>(Sanitario)"]:::staff
        RLS["RLS<br>(Sindacale)"]:::rep

        %% --- FLUSSI GERARCHICI ---
        DL ==>|Delega| DIR
        DIR ==>|Organizza| PRE
        PRE ==>|Vigila| LAV

        %% --- FLUSSI FUNZIONALI ---
        DL -.->|Nomina| RSPP
        DL -.->|Nomina| MC
        RSPP -.->|Valuta Rischi per| DL
        MC -.->|Visita| LAV
        LAV -.->|Elegge| RLS
        RLS -.->|Consulta| DL
    end

    %% ==========================================
    %%   SUBGRAPH 2: I DOCUMENTI (DESTRA)
    %% ==========================================
    subgraph Documenti ["📄 I DOCUMENTI (Cosa serve)"]
        direction TB
        %% --- NODI ---
        NORMA("⚖️ D.Lgs 81/08<br>(La Legge)"):::doc_law
        DVR("⚠️ D.V.R.<br>(Valutazione Rischi)"):::doc_dvr
        POS("🏗️ P.O.S.<br>(Piano Operativo)"):::doc_pos

        %% --- FLUSSI ---
        NORMA == "Obbliga a redigere" ==> DVR
        DVR == "Base per creare il" ==> POS
    end

    %% ==========================================
    %%   INTERAZIONI (CLICK)
    %% ==========================================
    
    %% Link Persone (Puntano alle tue schede interne)
    click DL "#/def_datore" "Scheda interna: Datore di Lavoro"
    click PRE "#/def_preposto" "Scheda interna: Preposto"
    click LAV "#/def_lavoratore" "Scheda interna: Lavoratore"
    click RSPP "[https://it.wikipedia.org/wiki/Responsabile_del_servizio_di_prevenzione_e_protezione](https://it.wikipedia.org/wiki/Responsabile_del_servizio_di_prevenzione_e_protezione)" "Wikipedia: RSPP"
    click MC "#/def_medico" "Scheda interna: Medico"
    click RLS "[https://it.wikipedia.org/wiki/Rappresentante_dei_lavoratori_per_la_sicurezza](https://it.wikipedia.org/wiki/Rappresentante_dei_lavoratori_per_la_sicurezza)" "Wikipedia: RLS"

    %% Link Documenti
    click NORMA "[https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s](https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s)" "Fonte Ufficiale: Gazzetta"
    click DVR "[https://it.wikipedia.org/wiki/Documento_di_valutazione_dei_rischi](https://it.wikipedia.org/wiki/Documento_di_valutazione_dei_rischi)" "Wikipedia: DVR"
    click POS "#/def_pos" "Scheda interna: POS"

    %% ==========================================
    %%   STILI (CSS)
    %% ==========================================
    classDef boss fill:#000,color:#fff,stroke-width:4px;
    classDef man fill:#007bff,color:#fff;
    classDef worker fill:#fff,stroke:#333;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000;
    
    classDef doc_law fill:#2c3e50,color:#fff,stroke:#f1c40f,stroke-width:2px;
    classDef doc_dvr fill:#e67e22,color:#fff,stroke:#333,stroke-width:2px;
    classDef doc_pos fill:#27ae60,color:#fff,stroke:#333,stroke-width:2px;
