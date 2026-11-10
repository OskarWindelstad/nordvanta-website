# Nordvanta – nettside

En responsiv norsk firmaside bygget med React, TypeScript, Vite og Tailwind CSS.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne adressen Vite viser i terminalen.

## Produksjonsbygg

```bash
npm run build
npm run preview
```

## Før publisering

- Bytt ut konseptlogoen dersom ønsket endelig logo blir annerledes.
- Koble kontaktskjemaet til en faktisk e-posttjeneste eller backend. Skjemaet er foreløpig kun en frontend-demo.
- Legg inn reell kontaktinformasjon og organisasjonsnummer når selskapet er registrert.
- Publiser personvernerklæring og oppdater samtykketeksten for skjemaet.
- Bytt ut eventuelle illustrasjoner med egne, lisensierte bilder eller lokale bildefiler.
- Kontroller at Nordvanta-navnet og domenet er tilgjengelig før offentlig lansering.

## Struktur

- `src/App.tsx` – sidens seksjoner og innhold
- `src/components/Logo.tsx` – gjenbrukbar logo
- `src/index.css` – Tailwind og designsystem
- `tailwind.config.js` – farger, fonter og skygger
