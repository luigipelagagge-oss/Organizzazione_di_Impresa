# U.D. 4.4 – La Sicurezza sul Lavoro (D.Lgs 81/08)

## 1. Il Quadro Normativo
In Italia, la salute e la sicurezza nei luoghi di lavoro sono regolate dal **D.Lgs. 81/2008**, noto come "Testo Unico sulla Sicurezza".
L'obiettivo della legge non è solo risarcire i danni, ma **prevenirli** attraverso un'organizzazione aziendale specifica.

> **Concetto chiave:** La sicurezza non è un costo, ma un investimento obbligatorio per la tutela della persona.

## 2. Differenza tra Pericolo e Rischio
Prima di vedere i ruoli, è fondamentale distinguere questi due concetti spesso confusi:

| Concetto | Definizione | Esempio |
| :--- | :--- | :--- |
| **PERICOLO** | Proprietà intrinseca di qualcosa di causare danni. (È la "potenzialità" del danno). | Un cavo elettrico scoperto, una sostanza tossica. |
| **RISCHIO** | La probabilità che il pericolo causi effettivamente un danno. | Toccare il cavo scoperto. |

> **Obiettivo:** Il pericolo spesso non si può eliminare, ma il **rischio si deve ridurre** (misure di prevenzione).

## 3. L'Organigramma della Sicurezza
La legge definisce dei ruoli precisi (Attori della Sicurezza), ognuno con responsabilità specifiche.

```mermaid
graph TD
    DL[**DATORE DI LAVORO**<br>Responsabilità Civile e Penale]:::boss --> RSPP[**RSPP**<br>Resp. Servizio Prevenzione<br>e Protezione]:::tech
    DL --> MC[**MEDICO COMPETENTE**<br>Sorveglianza Sanitaria]:::doc
    
    subgraph Lavoratori
    PRE[**Preposto**<br>Sovrintende e controlla]:::worker --> LAV[**Lavoratore**<br>Obbligo di usare i DPI]:::worker
    end
    
    RSPP -.->|Consulenza Tecnica| DL
    MC -.->|Visite Mediche| LAV
    
    RLS[**RLS**<br>Rappr. Lavoratori<br>per la Sicurezza]:::rep -.->|Consulta e Controlla| DL
    RLS -.->|Portavoce| LAV

    %% Stili grafici
    classDef boss fill:#000,color:#fff,stroke:#333;
    classDef tech fill:#007bff,color:#fff;
    classDef doc fill:#28a745,color:#fff;
    classDef rep fill:#ffc107,color:#000;
    classDef worker fill:#fff,stroke:#333;
