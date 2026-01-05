# 4.4 Sicurezza sul Lavoro (D.Lgs 81/08)

## 1. Il Riferimento Legislativo
La sicurezza non è un'opzione, ma un obbligo definito dal **Testo Unico (D.Lgs 81/08)**.
Tutte le figure aziendali devono rispettare quanto stabilito nella fonte ufficiale:

🔗 **[Consulta il D.Lgs 81/08 sulla Gazzetta Ufficiale della Repubblica Italiana](https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s)**

---

## 2. Concetti Chiave: Prevenzione vs Protezione
Prima di analizzare i ruoli, è fondamentale capire la logica della legge che distingue due tipi di intervento.

| Concetto | Definizione | Esempio |
| :--- | :--- | :--- |
| **🛡️ PREVENZIONE** | Tutto ciò che facciamo per **evitare** che accada un incidente. Agisce sulla probabilità (abbassandola). | Formazione, manutenzione macchine, pause, segnaletica. |
| **⛑️ PROTEZIONE** | Tutto ciò che usiamo per **limitare i danni** se l'incidente accade comunque. Agisce sulla gravità. | Casco, scarpe antinfortunistiche, imbragature, estintori. |

> *"La Prevenzione salva dalla causa, la Protezione salva dall'effetto."*

---

## 3. L'Organizzazione (Mappa Interattiva)
La sicurezza si basa su **Persone** (chi ha le responsabilità) e **Documenti** (cosa bisogna scrivere).

> **Istruzione:** Clicca sulle caselle per aprire le schede di dettaglio o i siti ufficiali.

```mermaid
graph TD
    %% ==========================================
    %%   SUBGRAPH 1: LE PERSONE (SINISTRA)
    %% ==========================================
    subgraph Persone ["👥 L'ORGANIGRAMMA (Chi fa cosa)"]
        direction TB
        %% --- NODI ---
        DL["DATORE DI LAVORO<br>(Responsabilità Penale)"]:::boss
        DIR["DIRIGENTE<br>(Organizza)"]:::man
        PRE["PREPOSTO<br>(Vigila)"]:::man
        LAV["LAVORATORE<br>(Esegue)"]:::worker

        %% --- STAFF ---
        RSPP["RSPP<br>(Tecnico Sicurezza)"]:::staff
        MC["MEDICO COMP.<br>(Sorveglianza Sanitaria)"]:::staff
        RLS["RLS<br>(Rappresentante Lavoratori)"]:::rep

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
    %%   INTERAZIONI E LINK
    %% ==========================================
    
    %% --- PERSONE (Link istituzionali o interni) ---
    click DL "[https://www.lavoro.gov.it/temi-e-priorita/salute-e-sicurezza](https://www.lavoro.gov.it/temi-e-priorita/salute-e-sicurezza)" "Ministero del Lavoro"
    click DIR "[https://www.ispettorato.gov.it/](https://www.ispettorato.gov.it/)" "Ispettorato Nazionale"
    click PRE "[https://www.ispettorato.gov.it/](https://www.ispettorato.gov.it/)" "Ispettorato Nazionale"
    click LAV "[https://www.inail.it/cs/internet/attivita/prevenzione.html](https://www.inail.it/cs/internet/attivita/prevenzione.html)" "INAIL Prevenzione"
    click RSPP "[https://www.inail.it/cs/internet/attivita/prevenzione/gestione-salute-sicurezza.html](https://www.inail.it/cs/internet/attivita/prevenzione/gestione-salute-sicurezza.html)" "INAIL Gestione Sicurezza"
    click MC "[https://www.salute.gov.it/portale/temi/p2_6.jsp?id=1302&area=sicurezzaLavoro&menu=medico](https://www.salute.gov.it/portale/temi/p2_6.jsp?id=1302&area=sicurezzaLavoro&menu=medico)" "Ministero Salute"
    click RLS "[https://www.inail.it/cs/internet/attivita/prevenzione/formazione/rls.html](https://www.inail.it/cs/internet/attivita/prevenzione/formazione/rls.html)" "INAIL RLS"

    %% --- DOCUMENTI (Link Ripristinati) ---
    %% NORMA -> Gazzetta Ufficiale (Resta esterno perché è la fonte)
    click NORMA "[https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s](https://www.gazzettaufficiale.it/eli/id/2008/04/30/008G0104/s)" "Apri Gazzetta Ufficiale"
    
    %% DVR -> Scheda Interna (Ripristinato)
    click DVR "#/def_dvr" "Vai alla scheda DVR"
    
    %% POS -> Scheda Interna (Ripristinato)
    click POS "#/def_pos" "Vai alla scheda POS"

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
