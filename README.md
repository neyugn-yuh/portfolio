# Justin Developer — Linh Cảnh

An interactive developer portfolio built from the original `3d_oriental_map_developer_portfolio.html` reference. Five 3D stations introduce Justin, interface work, systems, projects, and contact information. Includes day/sunset/night lighting, SVG navigation, keyboard support, and a content fallback when WebGL is unavailable.

The live scene uses original Blender miniatures inspired by Vietnamese architecture: One Pillar Pagoda, Khue Van Pavilion, Hue imperial gates, Hoi An shophouses, and a garden house. Curved tiled roofs, railings, shutters, silk lanterns, lotus flowers, bamboo, branching trees and limestone karsts replace the primitive buildings. These are stylized interpretations, not measured heritage reconstructions.

Justin's profile occupies Khue Van Pavilion in the center; the interface station uses One Pillar Pagoda in the western garden. The terrain combines original parchment and walnut textures, contour engraving, a jade stream, a stone bridge, and raised foundations. Regenerate terrain textures with `python scripts/paint-terrain.py` (Pillow).

Lighting defaults to the current time in `Asia/Ho_Chi_Minh`, blending dawn, daylight, sunset and night rather than jumping between presets. The clock button returns to automatic lighting after choosing a manual preview.

Small curved 3D petals tumble in world space, land on the actual map or building surfaces, remain for 3–6 seconds, then fade over 1.4 seconds. All 56 petals share one instanced draw call. The notched silhouette is inspired by the [godhitech-women-day reference](https://github.com/neyugn-yuh/godhitech-women-day/tree/acdfee162f3eb1e1405d4f8c3920cc652e3bfd9c). The flower button controls the effect; reduced-motion preference disables it initially and visitors can opt in.

`assets/models/vietnam-models.js` contains native Three.js ObjectLoader geometry. Models share materials and merge meshes by material: 213,468 triangles across all five stations and their surroundings, with 102 model draw calls. Tree canopies use individual folded leaves, forked branches, bark grooves, and small five-petal blossoms instead of sphere clusters. Quantized millimeter positions and normalized byte normals keep the detailed asset compact. Thumbnail art is rendered from the same Blender models.

To rebuild assets, use Blender 5.2 and Python with Pillow for thumbnail conversion:

```sh
blender --background --factory-startup --python scripts/build-vietnam.py -- --output-dir work
python scripts/pack-vietnam.py
```

The Blender script saves editable `linh-canh-vietnam.blend` in the output directory. Model sources and scratch files are excluded from deployment.

Architectural references: [Khue Van Pavilion, Van Mieu](https://www.vanmieu.gov.vn/vi/visit/architecture/khue-van-pavilion), [One Pillar Pagoda, Hanoi tourism](https://myhanoi.vn/vi/chuamotcot), [Hoi An Ancient Town, UNESCO](https://whc.unesco.org/en/list/948). No third-party model downloads or textures are used.

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
