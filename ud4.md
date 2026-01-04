 # U.D. 4.4 – L'Organigramma della Sicurezza (D.Lgs 81/08)

## 1. Il Quadro Normativo
Il riferimento assoluto è il **D.Lgs 81/2008** (Testo Unico sulla Salute e Sicurezza).
All'**Articolo 2**, la legge definisce esattamente chi sono gli "attori" della sicurezza.

> **Principio di Effettività:** La responsabilità penale non è di chi ha il "titolo" su carta, ma di chi ha l'effettivo potere decisionale e di spesa.

## 2. La Gerarchia della Sicurezza (Interattiva)
> **Istruzione:** 🖱️ **Passa il mouse** sui ruoli per leggere la funzione. **Clicca** per scendere alla tabella dei compiti.

```mermaid
graph TD
    %% --- DEFINIZIONE NODI (Senza grassetti interni per sicurezza) ---
    DL["DATORE DI LAVORO<br>(Vertice Assoluto)"]:::boss
    DIR["DIRIGENTE<br>(Attua le direttive)"]:::man
    PRE["PREPOSTO<br>(Sovrintende)"]:::man
    LAV["LAVORATORE<br>(Esegue)"]:::worker

    %% --- STAFF E CONTROLLO ---
    RSPP["RSPP<br>(Consulente Tecnico)"]:::staff
    MC["MEDICO COMP.<br>(Sorveglianza)"]:::staff
    RLS["RLS<br>(Rappr. Lavoratori)"]:::rep

    %% --- RELAZIONI GERARCHICHE ---
    DL ==>|Delega e Direttive| DIR
    DIR ==>|Organizza| PRE
    PRE ==>|Vigila| LAV

    %% --- RELAZIONI FUNZIONALI ---
    DL -.->|Nomina| RSPP
    DL -.->|Nomina| MC
    RSPP -.->|Consiglia| DL
    MC -.->|Visita| LAV
    LAV -.->|Elegge| RLS
    RLS -.->|Consulta| DL

    %% --- INTERATTIVITÀ (Tooltip + Link alla tabella) ---
    click DL "/#/ud4?id=tabella-sicurezza" "DATORE DI LAVORO: Ha il potere di spesa e firma il DVR."
    click DIR "/#/ud4?id=tabella-sicurezza" "DIRIGENTE: Organizza il lavoro e decide le tecnologie."
    click PRE "/#/ud4?id=tabella-sicurezza" "PREPOSTO: L'occhio del padrone. Controlla che si usino i DPI."
    click LAV "/#/ud4?id=tabella-sicurezza" "LAVORATORE: Deve segnalare i pericoli e non rimuovere protezioni."
    click RSPP "/#/ud4?id=tabella-sicurezza" "RSPP: Tecnico puro. Valuta i rischi ma non comanda."
    click MC "/#/ud4?id=tabella-sicurezza" "MEDICO: Decide l'idoneità alla mansione."
    click RLS "/#/ud4?id=tabella-sicurezza" "RLS: Sindacalista interno. Controlla che l'azienda rispetti le norme."

    %% --- STILI ---
    classDef boss fill:#000,color:#fff,stroke:#333,stroke-width:4px;
    classDef man fill:#007bff,color:#fff,stroke:#333;
    classDef worker fill:#fff,stroke:#333,color:#000;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000,stroke:#333;
