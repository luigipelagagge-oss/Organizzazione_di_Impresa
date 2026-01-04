# U.D. 4.3 – Strumenti Amministrativi

## 1. Il Flusso della Compravendita
Ogni vendita tra aziende deve seguire un percorso documentale preciso stabilito dalla legge.

Ecco la sequenza obbligatoria:

```mermaid
sequenceDiagram
    participant C as Cliente
    participant F as Fornitore

    C->>F: 1. ORDINE (Contratto)
    F->>C: 2. CONSEGNA MERCE + D.D.T.
    F->>C: 3. FATTURA (Doc. Fiscale)
    C->>F: 4. PAGAMENTO (Estinzione debito)
