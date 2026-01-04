### 3. File `ud3.md` (Strumenti Amministrativi completo)
Crea o sovrascrivi `ud3.md` con questo contenuto. Qui usiamo anche una tabella Markdown.

```markdown
# U.D. 4.3 – Strumenti Amministrativi

## 1. Il Flusso della Compravendita
Ogni vendita tra aziende deve seguire un percorso documentale preciso stabilito dalla legge (Codice Civile e Normativa Fiscale).

Ecco la sequenza obbligatoria:

```mermaid
sequenceDiagram
    participant Cliente
    participant Fornitore
    
    Cliente->>Fornitore: 1. ORDINE (Contratto)
    Fornitore->>Cliente: 2. CONSEGNA MERCE + D.D.T.
    Fornitore->>Cliente: 3. FATTURA (Doc. Fiscale)
    Cliente->>Fornitore: 4. PAGAMENTO (Estinzione debito)
