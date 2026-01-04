# U.D. 4.4 – L'Organigramma della Sicurezza (D.Lgs 81/08)

## 1. Il Quadro Normativo
Il riferimento assoluto è il **D.Lgs 81/2008** (Testo Unico sulla Salute e Sicurezza).
All'**Articolo 2**, la legge definisce esattamente chi sono gli "attori" della sicurezza e quali sono i loro compiti.

> **Principio Giuridico:** La responsabilità penale non è solo di chi firma, ma di chi ha l'effettivo potere decisionale (Principio di Effettività).

## 2. La Gerarchia della Sicurezza
In azienda esistono due linee diverse:
1.  **Linea Gerarchica (Comando):** Chi ha poteri decisionali e di spesa.
2.  **Linea Consultiva (Staff):** Chi consiglia e controlla, ma non comanda.

Ecco l'organigramma corretto secondo la norma:

```mermaid
graph TD
    %% DEFINIZIONE NODI
    DL[**DATORE DI LAVORO**<br>Vertice Assoluto]:::boss
    DIR[**DIRIGENTE**<br>Attua le direttive]:::man
    PRE[**PREPOSTO**<br>Sovrintende e controlla]:::man
    LAV[**LAVORATORE**<br>Esegue]:::worker

    %% STAFF E CONTROLLO
    RSPP[**RSPP**<br>Consulente Tecnico]:::staff
    MC[**MEDICO COMP.**<br>Sorveglianza]:::staff
    RLS[**RLS**<br>Rappresentante Lavoratori]:::rep

    %% RELAZIONI GERARCHICHE (Linee spesse)
    DL ==>|Delega e Direttive| DIR
    DIR ==>|Organizza| PRE
    PRE ==>|Vigila| LAV

    %% RELAZIONI FUNZIONALI (Linee tratteggiate)
    DL -.->|Nomina| RSPP
    DL -.->|Nomina| MC
    RSPP -.->|Consiglia| DL
    MC -.->|Visita| LAV
    LAV -.->|Elegge| RLS
    RLS -.->|Consulta| DL

    %% STILI GRAFICI
    classDef boss fill:#000,color:#fff,stroke:#333,stroke-width:4px;
    classDef man fill:#007bff,color:#fff,stroke:#333;
    classDef worker fill:#fff,stroke:#333,color:#000;
    classDef staff fill:#6c757d,color:#fff,stroke-dasharray: 5 5;
    classDef rep fill:#ffc107,color:#000,stroke:#333; 
