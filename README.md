# Gestionale

![License](https://img.shields.io/github/license/aniaBeninati/Gestionale)
![GitHub last commit](https://img.shields.io/github/last-commit/aniaBeninati/Gestionale)

## Descrizione

**Gestionale** è un progetto sviluppato per la gestione di attività o processi interni a un'organizzazione. Il software consente una gestione efficiente di dati e flussi di lavoro, permettendo agli utenti di monitorare e amministrare operazioni aziendali quotidiane con facilità.

## Funzionalità principali

- Gestione anagrafica dei clienti
- Tracciamento ordini e fatturazione
- Organizzazione e pianificazione delle risorse
- Reportistica e statistiche personalizzabili
- Dashboard interattiva per monitoraggio delle attività in tempo reale
- Autenticazione e gestione utenti

## Tecnologie utilizzate

- **Frontend**: React/Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB/Firebase
- **Autenticazione**: Firebase Authentication
- **Hosting**: Vercel

## Requisiti

- Node.js (versione 14 o superiore)
- NPM o Yarn
- MongoDB (per il database locale o remoto)
- Firebase (per l'autenticazione)

## Installazione

Segui questi passaggi per installare e avviare il progetto in locale:

1. Clona il repository:
    ```bash
    git clone https://github.com/aniaBeninati/Gestionale.git
    ```
2. Vai nella cartella del progetto:
    ```bash
    cd Gestionale
    ```
3. Installa le dipendenze:
    ```bash
    npm install
    ```
    oppure
    ```bash
    yarn install
    ```

4. Crea un file `.env` e configura le tue variabili di ambiente:
    ```bash
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
    ```

5. Avvia l'applicazione in modalità sviluppo:
    ```bash
    npm run dev
    ```
    oppure
    ```bash
    yarn dev
    ```

6. Visita l'applicazione nel browser all'indirizzo `http://localhost:3000`.

## Struttura del progetto

Ecco una panoramica dei file e delle cartelle principali del progetto:

```bash
Gestionale/
│
├── components/        # Componenti React utilizzati nell'app
├── pages/             # Pagine gestite da Next.js
├── public/            # File statici come immagini
├── styles/            # File CSS/SCSS o Tailwind config
├── utils/             # File di utilità (API, animazioni GSAP, ecc.)
├── firebaseConfig.js  # Configurazione di Firebase
└── README.md          # Documentazione del progetto
