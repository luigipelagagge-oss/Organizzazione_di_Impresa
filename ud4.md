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

## 3. 👥 L'Organizzazione (Mappa Interattiva)

La sicurezza è un lavoro di squadra. Clicca sulle caselle per conoscere i dettagli di ogni ruolo, oppure sull'ovale centrale per la Riunione Periodica.

```mermaid
graph TD
    %% Definizione dei Nodi (Figure)
    DL[💼 Datore di Lavoro<br>Potere Decisionale e di Spesa] --- RLS[🗣️ R.L.S.<br>Rappresentante Lavoratori]
    DL --> RSPP[📐 R.S.P.P.<br>Consulente Tecnico]
    DL --> MC[🩺 Medico Competente<br>Sorveglianza Sanitaria]

    %% Nodo della Riunione Periodica (Ovale centrale)
    MEETING((🤝 Riunione Periodica<br>Art. 35))

    %% Collegamenti alla Riunione (i 4 partecipanti obbligatori)
    DL -. Partecipa .-> MEETING
    RSPP -. Partecipa .-> MEETING
    MC -. Partecipa .-> MEETING
    RLS -. Partecipa .-> MEETING

    %% Linea gerarchica operativa
    DL ==> DIR[👔 Dirigente<br>Organizza e Vigila]
    DIR ==> PRE[👷‍♂️ Preposto<br>Sovrintende e Controlla]
    PRE ==> LAV[👷 Lavoratore<br>Esegue in Sicurezza]

    %% Relazione di rappresentanza
    RLS -. Rappresenta .-> LAV

    %% Stili
    style DL fill:#1a237e,stroke:#fff,color:#fff,stroke-width:2px
    style RLS fill:#f57f17,stroke:#333,color:#fff,stroke-width:2px
    style RSPP fill:#0288d1,stroke:#fff,color:#fff
    style MC fill:#00796b,stroke:#fff,color:#fff
    style MEETING fill:#e1bee7,stroke:#8e24aa,stroke-width:2px,color:#000,stroke-dasharray: 5 5
    style DIR fill:#5c6bc0,stroke:#fff,color:#fff
    style PRE fill:#7986cb,stroke:#fff,color:#fff
    style LAV fill:#9fa8da,stroke:#333,color:#000

    %% Link (Path corretti per Docsify)
    click DL "def_datore.md" "Vai alla scheda del Datore"
    click RLS "def_rls.md" "Vai alla scheda dell'RLS"
    click RSPP "def_rspp.md" "Vai alla scheda dell'RSPP"
    click MC "def_medico.md" "Vai alla scheda del Medico"
    click DIR "def_dirigente.md" "Vai alla scheda del Dirigente"
    click PRE "def_preposto.md" "Vai alla scheda del Preposto"
    click LAV "def_lavoratore.md" "Vai alla scheda del Lavoratore"
    click MEETING "#riunione-periodica-art-35" "Vai ai dettagli della Riunione"
