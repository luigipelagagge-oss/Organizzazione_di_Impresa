# 📘 Manuale di Progetto: Organizzazione di Impresa

Benvenuto nella documentazione tecnica del sito.
Questo progetto è un portale educativo basato su **Docsify** e **GitHub Pages** per l'insegnamento dell'Organizzazione Aziendale e della Sicurezza sul Lavoro.

> **Stato del Progetto:** 🟢 FUNZIONANTE
> **Ultima Verifica:** Gennaio 2026

---

## 🗺️ Mappa del Sito e Relazioni

Il sito è strutturato con una logica **"Hub & Spoke"** (Mozzo e Raggi): ci sono pagine principali (Diagrammi) che portano a pagine di dettaglio.

### 1. Le Pagine "Madre" (Diagrammi)
Queste pagine contengono i grafici interattivi realizzati con **Mermaid.js**.
* **`ud1.md`** (L'Azienda e Sistema Integrato): Contiene l'organigramma generale e i link ISO.
* **`ud4.md`** (Sicurezza D.Lgs 81/08): Contiene l'organigramma della sicurezza.

### 2. Le Pagine "Figlio" (Dettagli)
Queste sono pagine di testo semplice che approfondiscono i concetti.
* *Sicurezza:* `def_datore.md`, `def_rspp.md`, `def_dvr.md`, `def_norme.md`, `def_pos.md`, ecc.
* *ISO/Ambiente:* `def_iso_9001.md`, `def_iso_14001.md`, ecc.

### 3. I File di Sistema
* `index.html`: Il motore del sito (contiene la configurazione di Docsify).
* `_sidebar.md`: Il menu laterale di navigazione.
* `README.md`: Questo file (Home Page / Manuale).

---

## ⚙️ Regole di Manutenzione (IMPORTANTE)

Per evitare che il sito si "rompa" (grafici che spariscono, errori 404), segui rigorosamente queste regole di sintassi.

### 1. La Regola d'Oro dei Link (Mermaid vs Markdown)
C'è una differenza fondamentale nel modo di scrivere i link a seconda di dove ti trovi:

| Dove stai scrivendo? | Sintassi Corretta | Esempio |
| :--- | :--- | :--- |
| **Dentro un grafico MERMAID** | `#/nomefile` | `click A "#/def_dvr" "Apri"` |
| **Testo normale (Markdown)** | `nomefile.md` | `[Torna indietro](ud4.md)` |

> ⚠️ **ATTENZIONE:** Se dentro Mermaid dimentichi il `#/` (hash + slash), il grafico sparirà quando l'utente prova a tornare indietro col browser.

### 2. Come creare una nuova pagina
1.  Crea un nuovo file (es. `nuova_lezione.md`).
2.  Scrivi il contenuto iniziando con un titolo `# Titolo`.
3.  Aggiungi il link al menu laterale in `_sidebar.md`:
    `* [Titolo nel Menu](nuova_lezione.md)`

### 3. Come aggiungere un nodo al grafico
1.  Apri il file "Madre" (es. `ud4.md`).
2.  Nel blocco `graph TD`, definisci il nodo: `NODO("Testo")`.
3.  Collega il nodo: `ALTRONODO --> NODO`.
4.  Attiva il click (Ricorda la regola #1!):
    `click NODO "#/nuova_lezione" "Tooltip"`

---

## 🛠️ Risoluzione Problemi Comuni

**PROBLEMA: Vedo il codice scritto invece del grafico.**
* *Causa:* Hai cancellato per sbaglio i marcatori di codice ` ```mermaid ` oppure hai incollato caratteri strani prima dell'intestazione.
* *Soluzione:* Pulisci il file. Assicurati che inizi col titolo `#` e che il blocco mermaid sia racchiuso correttamente.

**PROBLEMA: Clicco e vedo "404 Not Found".**
* *Causa:* Il nome del file nel link è sbagliato o il file non esiste.
* *Soluzione:* Controlla maiuscole/minuscole. `Def_Dvr.md` è diverso da `def_dvr.md`. Usa sempre minuscolo per sicurezza.

**PROBLEMA: Torno indietro e il grafico non c'è più.**
* *Causa:* Nel grafico Mermaid manca il `#/` davanti al link.
* *Soluzione:* Correggi il link nel file `ud4.md` o `ud1.md`.

---

[📂 Vai al Repository GitHub](https://github.com/tuo-utente/tuo-repo)
