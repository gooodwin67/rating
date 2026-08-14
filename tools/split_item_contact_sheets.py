"""Split generated contact sheets into item images declared in src/data/items.js."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ITEMS_FILE = ROOT / "src" / "data" / "items.js"
CELL_SIZE = 400

OBJECT_RE = re.compile(r"\{(?P<body>.*?)\}", re.DOTALL)
FIELD_RE = re.compile(r'"(?P<key>id|categoryId|title|image)"\s*:\s*"(?P<value>[^"]*)"')


def load_items() -> dict[tuple[str, str], dict[str, str]]:
    text = ITEMS_FILE.read_text(encoding="utf-8")
    items: dict[tuple[str, str], dict[str, str]] = {}

    for match in OBJECT_RE.finditer(text):
        fields = {field.group("key"): field.group("value") for field in FIELD_RE.finditer(match.group("body"))}
        if {"id", "categoryId", "image"} <= fields.keys():
            items[(fields["categoryId"], fields["id"])] = fields

    if not items:
        raise RuntimeError(f"No item records found in {ITEMS_FILE}")

    return items


def resolve_source(manifest_path: Path, value: str) -> Path:
    source = Path(value)
    if not source.is_absolute():
        source = manifest_path.parent / source
    return source.resolve()


def output_path(image_url: str) -> Path:
    relative = image_url.removeprefix("/")
    if not relative.startswith("images/items/"):
        raise ValueError(f"Unsupported item image path: {image_url}")
    return ROOT / "public" / relative


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", required=True, type=Path, help="JSON manifest describing sheets and row-major item IDs")
    parser.add_argument("--force", action="store_true", help="Allow replacement of existing item images")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    manifest_path = args.manifest.resolve()
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    category_id = manifest["category_id"]
    sheets = manifest["sheets"]
    items = load_items()
    seen: set[str] = set()
    jobs: list[tuple[Path, int, list[str]]] = []

    for sheet in sheets:
        source = resolve_source(manifest_path, sheet["source"])
        grid = int(sheet["grid"])
        item_ids = list(sheet["items"])

        if grid < 1:
            raise ValueError(f"Invalid grid size for {source}: {grid}")
        if len(item_ids) > grid * grid:
            raise ValueError(f"Sheet {source} has {len(item_ids)} items but only {grid * grid} cells")
        if not source.is_file():
            raise FileNotFoundError(source)

        for item_id in item_ids:
            if item_id in seen:
                raise ValueError(f"Duplicate item ID in manifest: {item_id}")
            item_key = (category_id, item_id)
            if item_key not in items:
                raise ValueError(f"Unknown item ID: {item_id}")
            destination = output_path(items[item_key]["image"])
            if destination.exists() and not args.force:
                raise FileExistsError(f"Refusing to overwrite existing asset: {destination}")
            seen.add(item_id)

        jobs.append((source, grid, item_ids))

    if not seen:
        raise ValueError("Manifest contains no items")

    for source, grid, item_ids in jobs:
        canvas_size = grid * CELL_SIZE
        with Image.open(source) as opened:
            sheet_image = opened.convert("RGB").resize(
                (canvas_size, canvas_size),
                Image.Resampling.LANCZOS,
            )

        for index, item_id in enumerate(item_ids):
            column = index % grid
            row = index // grid
            left = column * CELL_SIZE
            top = row * CELL_SIZE
            cell = sheet_image.crop((left, top, left + CELL_SIZE, top + CELL_SIZE))
            destination = output_path(items[(category_id, item_id)]["image"])
            destination.parent.mkdir(parents=True, exist_ok=True)
            cell.save(destination, "JPEG", quality=94, subsampling=0, optimize=True)
            print(destination.relative_to(ROOT))

    print(f"Saved {len(seen)} item images for category {category_id}")


if __name__ == "__main__":
    main()
