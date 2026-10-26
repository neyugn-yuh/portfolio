# Justin Developer — Linh Cảnh

An interactive developer portfolio built from the original `3d_oriental_map_developer_portfolio.html` reference. Five 3D stations introduce Justin, interface work, systems, projects, and contact information. Includes day/sunset/night lighting, SVG navigation, keyboard support, and a content fallback when WebGL is unavailable.

## Run locally

```sh
python -m http.server 8317 --bind 127.0.0.1
```

Open http://127.0.0.1:8317. No install or build is required. Three.js and icon fonts are served locally; Google Fonts is optional and has system-font fallbacks.

## Edit

- `assets/portfolio.js`: station content (`STATIONS_DATA`), scene, and interactions.
- `assets/portfolio.css`: custom styling and responsive layout.
- `index.html`: page metadata, navigation, and dialogs.
- `3d_oriental_map_developer_portfolio.html`: preserved design reference; excluded from deployment.

If Tailwind utility classes change in HTML or JavaScript, regenerate the checked-in CSS:

```sh
npm exec --yes --package=tailwindcss@3.4.19 -- tailwindcss --content "./index.html,./assets/portfolio.js" -o ./assets/utilities.css --minify
```

## Verify

```sh
node --check assets/portfolio.js
node --test tests/portfolio.test.cjs
```

## Deploy

Vercel serves the repository root as static files using `vercel.json`. Connect `neyugn-yuh/portfolio`, branch `main`, framework **Other**, root directory **.**, with no build or install command. Pushes to `main` deploy automatically after Git connection is configured.

The existing `justin-portfolio` project and its custom domains are managed separately. Assign a custom domain to this new project through Vercel when ready.
