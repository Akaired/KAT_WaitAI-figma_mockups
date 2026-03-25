#!/usr/bin/env bash
# strip.sh — Rimuove il boilerplate Figma/Vite dalle subfolder mockup
# Uso: ./strip.sh [subfolder]   (senza argomenti: processa tutto)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# ── Boilerplate files da rimuovere ────────────────────────
BOILERPLATE=(
  "index.html"
  "package.json"
  "package-lock.json"
  "postcss.config.mjs"
  "vite.config.ts"
  "tailwind.config.ts"
  "README.md"
  "ATTRIBUTIONS.md"
  "*.make"
)

# ── Cartelle da rimuovere intere ──────────────────────────
DIRS_TO_REMOVE=(
  "src/app/components/ui"
  "src/app/components/figma"
  "node_modules"
  "dist"
  ".vite"
  "guidelines"
)

# ── File src da rimuovere ─────────────────────────────────
SRC_FILES_TO_REMOVE=(
  "src/main.tsx"
  "src/main.ts"
  "src/app/App.tsx"
  "src/styles/index.css"
  "src/styles/fonts.css"
  "src/styles/tailwind.css"
)

# ── Componenti condivisi (copie identiche della frontpage) ─
SHARED_COMPONENTS=(
  "src/app/components/CTA.tsx"
  "src/app/components/CTASection.tsx"
  "src/app/components/Features.tsx"
  "src/app/components/Footer.tsx"
  "src/app/components/Hero.tsx"
  "src/app/components/HowItWorks.tsx"
  "src/app/components/HowSection.tsx"
  "src/app/components/Statistics.tsx"
  "src/app/components/Stats.tsx"
)

strip_folder() {
  local folder="$1"

  if [ ! -d "$folder" ]; then
    echo "⚠️  Cartella non trovata: $folder — skip"
    return
  fi

  echo "🧹 Stripping: $folder"

  # Boilerplate root
  for pattern in "${BOILERPLATE[@]}"; do
    # glob expansion nella subfolder
    for f in "$folder"/$pattern; do
      [ -f "$f" ] && rm -f "$f" && echo "   ✗ $f"
    done
  done

  # Cartelle intere
  for dir in "${DIRS_TO_REMOVE[@]}"; do
    local full="$folder/$dir"
    [ -d "$full" ] && rm -rf "$full" && echo "   ✗ $full/"
  done

  # File src
  for f in "${SRC_FILES_TO_REMOVE[@]}"; do
    local full="$folder/$f"
    [ -f "$full" ] && rm -f "$full" && echo "   ✗ $full"
  done

  # Componenti condivisi (non per la frontpage — quella È la sorgente)
  if [ "$(basename "$folder")" != "frontpage" ]; then
    for f in "${SHARED_COMPONENTS[@]}"; do
      local full="$folder/$f"
      [ -f "$full" ] && rm -f "$full" && echo "   ✗ $full"
    done
    # Navigation solo nelle pagine che non sono la frontpage
    local nav="$folder/src/app/components/Navigation.tsx"
    [ -f "$nav" ] && rm -f "$nav" && echo "   ✗ $nav"
  fi

  # Rimuovi cartelle src vuote rimaste
  find "$folder/src" -type d -empty -delete 2>/dev/null || true

  echo "   ✅ Done"
}

# ── Main ──────────────────────────────────────────────────

if [ $# -gt 0 ]; then
  # Processa solo le subfolder passate come argomenti
  for target in "$@"; do
    strip_folder "$target"
  done
else
  # Processa tutte le subfolder (esclude se stessa e file)
  for dir in */; do
    strip_folder "${dir%/}"
  done
fi

echo ""
echo "🎉 Strip completato. File rimasti:"
find . -not -path "./.git/*" -not -name "strip.sh" -type f | sort
