# 📊 Il Business Plan

## 1. Che cos'è?
Il Business Plan è il documento strategico che definisce il progetto imprenditoriale. 
Non è solo un "foglio di calcolo", ma il biglietto da visita dell'azienda verso banche e investitori per ottenere finanziamenti.

> **Definizione per l'Esame:** È un documento che sintetizza i contenuti e le caratteristiche di un progetto imprenditoriale, pianificandone le strategie e valutandone i risultati attesi nel medio periodo (3-5 anni).

---

## 2. L'Analisi SWOT (Strategia)
Prima di fare i calcoli, l'imprenditore usa la **Matrice SWOT** per incrociare i fattori Interni/Esterni con quelli Positivi/Negativi.

Ecco la matrice grafica della nostra azienda:

```mermaid
graph TB
    %% --- DEFINIZIONE DELLA GRIGLIA ---
    subgraph MATRICE_SWOT [ ]
        direction TB
        
        %% RIGA 1: FATTORI INTERNI
        subgraph INTERNI [FATTORI INTERNI (Dipendono da noi)]
            direction LR
            S["STRENGTHS<br>(Punti di Forza)<br><br>✅ Personale Qualificato<br>✅ Brevetti<br>✅ Buon Brand"]:::pos
            W["WEAKNESSES<br>(Debolezze)<br><br>❌ Pochi soldi<br>❌ Macchinari vecchi<br>❌ Marketing assente"]:::neg
        end

        %% RIGA 2: FATTORI ESTERNI
        subgraph ESTERNI [FATTORI ESTERNI (Dipendono dal Mercato)]
            direction LR
            O["OPPORTUNITIES<br>(Opportunità)<br><br>🚀 Incentivi Statali<br>🚀 Nuove Tecnologie<br>🚀 Fallimento concorrente"]:::pos
            T["THREATS<br>(Minacce)<br><br>⚠️ Tasse in aumento<br>⚠️ Crisi Economica<br>⚠️ Burocrazia lenta"]:::neg
        end
    end

    %% --- LINK INVISIBILE PER IMPILARE LE RIGHE ---
    INTERNI ~~~ ESTERNI

    %% --- STILI (Colori Verde/Rosso) ---
    classDef pos fill:#d4edda,stroke:#28a745,stroke-width:2px,color:#155724;
    classDef neg fill:#f8d7da,stroke:#dc3545,stroke-width:2px,color:#721c24;
    
    %% Stile per i contenitori
    style MATRICE_SWOT fill:#fff,stroke:#fff
    style INTERNI fill:#e2e6ea,stroke:#333,stroke-dasharray: 5 5,color:#333
    style ESTERNI fill:#e2e6ea,stroke:#333,stroke-dasharray: 5 5,color:#333
