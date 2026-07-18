# Project instructions

## Item images

- Treat `src/data/items.js` as the source of truth for category IDs, item IDs, titles, destination paths, and filenames.
- Store generated item photographs under the exact `image` path declared in `src/data/items.js`.
- Item assets must be JPEG files sized exactly 400 by 400 pixels.
- Use photorealistic catalog-style product photography on a seamless pure white background. Center one recognizable item in each image, keep it fully visible with padding, and use soft studio lighting with a subtle contact shadow.
- Do not include text, labels, branding, borders, watermarks, hands, people, packaging, or unrelated props. A plain plate, bowl, glass, or ramekin is allowed only when the food cannot be presented naturally without it.
- Use the built-in image-generation capability for raster assets. Prefer contact sheets for categories with many missing images.
- A 4 by 4 contact sheet is the default balance of speed and reliability. Use a smaller final sheet for the remainder. Avoid 5 by 5 sheets when subjects are visually similar or easy to confuse.
- The prompt for every contact sheet must define the exact row-major order, an edge-to-edge regular grid, equal square cells, pure white cell backgrounds, no gutters or grid lines, and no repeated, omitted, merged, or swapped subjects.
- Put generated contact sheets and manifests in `tmp/imagegen/`. These are temporary inputs and must not be committed.
- Split sheets with `python tools/split_item_contact_sheets.py --manifest <manifest.json>`. The script resizes the whole sheet to `grid * 400` before cropping; it does not resize individual cells.
- Do not overwrite an existing item image unless the user explicitly requests replacement. Pass `--force` only for an authorized replacement task.
- Do not run builds, tests, dev servers, previews, screenshots, or visual verification unless the user explicitly requests them.
- After editing assets, stop at the source changes and report the category, count, and saved paths.

## Cloud environment

- Install Python dependencies with `python -m pip install -r requirements-cloud.txt`.
- JavaScript dependencies may be installed with `npm ci` only when the requested task needs them.
