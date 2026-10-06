#!/usr/bin/env python3
"""Validate section page limits by locating chapter headings in the compiled PDF."""
from pathlib import Path
import re
import subprocess
import sys
import unicodedata

pdf = Path(sys.argv[1] if len(sys.argv) > 1 else "release-assets/main.pdf")
if not pdf.is_file():
    raise SystemExit(f"PDF ausente: {pdf}")
try:
    result = subprocess.run(
        ["pdftotext", "-layout", str(pdf), "-"],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
except FileNotFoundError:
    raise SystemExit("pdftotext ausente; instale o pacote poppler-utils antes desta validação.")
except subprocess.CalledProcessError as exc:
    raise SystemExit(f"Não foi possível extrair texto do PDF: {exc.stderr}")

pages = result.stdout.split("\f")
while pages and not pages[-1].strip():
    pages.pop()

def canonical(line: str) -> str:
    text = unicodedata.normalize("NFKD", line)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return re.sub(r"\s+", " ", text).strip().upper()

chapters = [
    ("Introdução", "INTRODUCAO", 3),
    ("Objetivos", "OBJETIVOS", 3),
    ("Metodologia", "METODOLOGIA", 3),
    ("Referencial teórico", "REFERENCIAL TEORICO", 3),
    ("Resultados e discussão", "RESULTADOS E DISCUSSAO", None),
    ("Considerações finais", "CONSIDERACOES FINAIS", 3),
    ("Referências", "REFERENCIAS", 2),
]
starts: dict[str, int] = {}
for name, heading, _limit in chapters:
    pattern = re.compile(rf"^(?:\d+(?:\.\d+)*\s+)?{re.escape(heading)}$", re.I)
    hits = []
    for page_number, page in enumerate(pages, start=1):
        if any(pattern.fullmatch(canonical(line)) for line in page.splitlines()):
            hits.append(page_number)
    if hits:
        # Prefer the last exact heading so an uppercase contents entry cannot
        # be mistaken for the chapter in the body.
        starts[name] = hits[-1]
    else:
        print(f"Cabeçalho não localizado no PDF: {name}")

errors = []
ordered = [starts[name] for name, _, _ in chapters if name in starts]
if ordered != sorted(ordered):
    errors.append("Os capítulos não aparecem na ordem esperada no PDF.")
for index, (name, _heading, limit) in enumerate(chapters):
    if name not in starts:
        errors.append(f"{name}: não foi possível medir; cabeçalho não localizado.")
        continue
    next_start = next((starts[n] for n, _, _ in chapters[index + 1 :] if n in starts), None)
    if name == "Referências":
        page_count = len(pages) - starts[name] + 1
    elif next_start is None:
        errors.append(f"{name}: não existe seção seguinte para delimitar as páginas.")
        continue
    else:
        page_count = next_start - starts[name]
    if limit is None:
        print(f"{name}: páginas {starts[name]}–{starts[name] + page_count - 1} ({page_count}; sem limite definido)")
        continue
    print(f"{name}: páginas {starts[name]}–{starts[name] + page_count - 1} ({page_count}; exigido < {limit})")
    if page_count < 1:
        errors.append(f"{name}: sequência de páginas inválida.")
    elif page_count >= limit:
        errors.append(f"{name}: ocupa {page_count} páginas; máximo permitido {limit - 1}.")

if errors:
    print("\nFALHA — limites de extensão não atendidos:")
    for error in errors:
        print(f"- {error}")
    raise SystemExit(1)
print("\nSUCESSO — todas as seções com limite definido atendem ao máximo de páginas.")
