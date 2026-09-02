# Garden Dante — Fioreria (sito React)

Progetto React + Vite + Tailwind CSS v4 + Framer Motion, stesso stack usato per salone-daniela.

## Avvio in locale

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
npm run preview   # per controllare la build
```

## Deploy

Stesso flusso già usato per gli altri progetti:

```bash
npx vercel
```

oppure collega la repo GitHub a Vercel per il deploy automatico.

## Struttura

- `src/components/` — Navbar, Hero, Storia, Servizi, Citazione, Dove, Footer
- `src/assets/logo.png` — logo ufficiale (sfondo reso trasparente)
- `src/index.css` — tema Tailwind v4 (palette + font) via `@theme`
- Palette: verde oliva `#598527`, magenta vinaccia `#991F50`, verde lime `#99CA3A`, crema `#FBF7EF` — estratta dal logo reale

## Dati reali usati

Indirizzo, telefono e orari sono presi da Google Maps/Places (Fioreria Garden Dante, Via dell'Ippodromo 25, Padova). Da verificare con il cliente prima della pubblicazione definitiva.
