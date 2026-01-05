# 📊 Il Business Plan

## Che cos'è?
Il Business Plan è il documento strategico che definisce il progetto imprenditoriale. Non è solo un "foglio di calcolo", ma il biglietto da visita dell'azienda verso banche e investitori.

> **Definizione da Esame:** È un documento che sintetizza i contenuti e le caratteristiche di un progetto imprenditoriale (nuova impresa o espansione) pianificandone le strategie e valutandone i risultati attesi.

---

## La Struttura del Business Plan
Si divide in due macro-aree fondamentali:

### A) Parte Descrittiva (Qualitativa)
Spiega il "Chi siamo" e il "Cosa vogliamo fare".
1.  **Executive Summary:** Sintesi breve del progetto (la parte che leggono gli investitori).
2.  **L'Impresa:** Storia, forma giuridica, soci, organigramma.
3.  **Analisi di Mercato:** Concorrenti, clienti target, analisi SWOT.
4.  **Piano di Marketing:** Prezzo, Prodotto, Promozione, Distribuzione (Le 4P).
5.  **Piano Operativo:** Come produciamo? Quali tecnologie usiamo? (Qui entra il Diagramma di Gantt).

### B) Parte Economico-Finanziaria (Quantitativa)
Traduce le parole in numeri.
1.  **Piano degli Investimenti:** Macchinari, brevetti, start-up.
2.  **Conto Economico Previsionale:** Costi vs Ricavi (utile atteso).
3.  **Stato Patrimoniale Previsionale:** Fonti (Finanziamenti) vs Impieghi.
4.  **Break Even Point:** Il punto di pareggio (quando i ricavi coprono i costi totali).

---

## Analisi SWOT (Strategia)
Uno degli strumenti più usati nel Business Plan per decidere la strategia.

```mermaid
graph TD
    SWOT[ANALISI SWOT]:::center
    
    INT[Fattori INTERNI<br>(Dipendono da noi)]:::internal
    EXT[Fattori ESTERNI<br>(Dipendono dal mercato)]:::external
    
    S[Strengths<br>PUNTI DI FORZA]:::good
    W[Weaknesses<br>PUNTI DI DEBOLEZZA]:::bad
    O[Opportunities<br>OPPORTUNITÀ]:::good
    T[Threats<br>MINACCE]:::bad
    
    SWOT --> INT
    SWOT --> EXT
    
    INT --> S
    INT --> W
    EXT --> O
    EXT --> T
    
    classDef center fill:#333,color:#fff;
    classDef internal fill:#007bff,color:#fff;
    classDef external fill:#6c757d,color:#fff;
    classDef good fill:#28a745,color:#fff;
    classDef bad fill:#dc3545,color:#fff;
