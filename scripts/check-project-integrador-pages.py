#!/usr/bin/env python3
"""Validate page-span limits from labels in the compiled LaTeX auxiliary file."""
from pathlib import Path
import re
import sys

aux = Path(sys.argv[1] if len(sys.argv) > 1 else "release-assets/projeto-integrador.aux")
if not aux.is_file():
    raise SystemExit(f"Arquivo auxiliar ausente: {aux}")
text = aux.read_text(encoding="utf-8", errors="replace")
labels = {
    match.group(1): int(match.group(2))
    for match in re.finditer(r"\\newlabel\{([^}]+)\}\{\{[^}]*\}\{(\d+)\}", text)
}
limits = {
    "Introdução": ("page:introducao:start", "page:introducao:end", 3),
    "Objetivos": ("page:objetivos:start", "page:objetivos:end", 3),
    "Metodologia": ("page:metodologia:start", "page:metodologia:end", 3),
    "Referencial teórico": ("page:referencial:start", "page:referencial:end", 3),
    "Considerações finais": ("page:consideracoes:start", "page:consideracoes:end", 3),
    "Referências": ("page:referencias:start", "page:referencias:end", 2),
}
errors = []
for section, (start_key, end_key, strict_limit) in limits.items():
    missing = [key for key in (start_key, end_key) if key not in labels]
    if missing:
        errors.append(f"{section}: rótulo ausente no AUX: {', '.join(missing)}")
        continue
    first, last = labels[start_key], labels[end_key]
    pages = last - first + 1
    print(f"{section}: páginas {first}–{last} ({pages}; exigido < {strict_limit})")
    if pages < 1:
        errors.append(f"{section}: sequência de páginas inválida ({first}–{last}).")
    elif pages >= strict_limit:
        errors.append(f"{section}: ocupa {pages} páginas; o máximo permitido é {strict_limit - 1}.")
if errors:
    print("\nFALHA — limites de extensão não atendidos:")
    for error in errors:
        print(f"- {error}")
    raise SystemExit(1)
print("\nSUCESSO — todas as seções atendem aos limites de páginas.")
