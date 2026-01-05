# 📊 Il Business Plan

## 1. Che cos'è?
Il Business Plan è il documento strategico che definisce il progetto imprenditoriale. 
Non è solo un "foglio di calcolo", ma il biglietto da visita dell'azienda verso banche e investitori per ottenere finanziamenti.

> **Definizione per l'Esame:** > È un documento che sintetizza i contenuti e le caratteristiche di un progetto imprenditoriale (nuova impresa o espansione), pianificandone le strategie e valutandone i risultati attesi nel medio periodo (3-5 anni).

---

## 2. La Struttura del Business Plan
Il documento si divide in due macro-aree fondamentali che devono essere coerenti tra loro.

### A) Parte Descrittiva (Qualitativa)
Spiega il "Chi siamo" e il "Cosa vogliamo fare".
1.  **Executive Summary:** Una sintesi breve e accattivante di tutto il progetto (è la prima cosa che legge un investitore!).
2.  **L'Impresa:** Storia, forma giuridica, i soci e l'organigramma (vedi Modulo 4.1).
3.  **Analisi di Mercato:** Chi sono i concorrenti? Chi sono i clienti target?
4.  **Piano di Marketing (Marketing Mix):** * *Product* (Prodotto/Servizio)
    * *Price* (Prezzo)
    * *Place* (Distribuzione)
    * *Promotion* (Pubblicità)
5.  **Piano Operativo:** Come produciamo? Quali tecnologie e personale (HR) servono?

### B) Parte Economico-Finanziaria (Quantitativa)
Traduce le parole in numeri per verificare la sostenibilità.
1.  **Piano degli Investimenti:** Elenco delle spese iniziali (macchinari, software, brevetti, start-up).
2.  **Conto Economico Previsionale:** Costi vs Ricavi -> Determina l'**Utile** atteso.
3.  **Stato Patrimoniale Previsionale:** Fonti (Dove prendo i soldi?) vs Impieghi (Come li spendo?).
4.  **Break Even Point (B.E.P.):** Il punto di pareggio. Indica la quantità minima di vendite necessaria per coprire i costi totali senza andare in perdita.

---

## 3. L'Analisi SWOT (Strumento Strategico)
Prima di scrivere il piano, l'imprenditore usa la matrice SWOT per analizzare la situazione.

* **Fattori Interni:** Possiamo controllarli (sono nostri).
* **Fattori Esterni:** Non possiamo controllarli (dipendono dal mercato/mondo).

```mermaid
graph TD
    SWOT[ANALISI SWOT]:::center
    
    INT[Fattori INTERNI<br>(Dipendono da noi)]:::internal
    EXT[Fattori ESTERNI<br>(Dipendono dal mercato)]:::external
    
    S[Strengths<br>PUNTI DI FORZA]:::good
    W[Weaknesses<br>PUNTI DI DEBOLEZZA]:::bad
    O[Opportunities<br>OPPORTUNITÀ]:::good
    T[Threats<br>MINACCE]:::bad
    
    %% Esempi Pratici nel grafo
    EX_S[Es: Brevetto esclusivo<br>Personale qualificato]:::note
    EX_W[Es: Scarsa liquidità<br>Brand sconosciuto]:::note
    EX_O[Es: Incentivi statali 4.0<br>Fallimento concorrente]:::note
    EX_T[Es: Nuove tasse<br>Crisi economica]:::note

    SWOT --> INT
    SWOT --> EXT
    
    INT --> S
    INT --> W
    EXT --> O
    EXT --> T
    
    S --- EX_S
    W --- EX_W
    O --- EX_O
    T --- EX_T
    
    classDef center fill:#333,color:#fff,stroke-width:2px;
    classDef internal fill:#0056b3,color:#fff;
    classDef external fill:#6c757d,color:#fff;
    classDef good fill:#28a745,color:#fff;
    classDef bad fill:#dc3545,color:#fff;
    classDef note fill:#fff,stroke:#333,stroke-dasharray: 5 5,font-size:13px;
