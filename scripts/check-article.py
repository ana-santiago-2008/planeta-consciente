from pathlib import Path
import re
import sys

source = Path("article/main.tex")
text = source.read_text(encoding="utf-8-sig")
version = Path("article/VERSION").read_text(encoding="utf-8-sig").strip()
errors: list[str] = []

required = {
    "title": r"\\newcommand\{\\tituloartigo\}\{[^{}]+\}",
    "version": rf"\\newcommand\{{\\projectversion\}}{{{re.escape(version)}}}",
    "abstract": r"\\begin\{resumo\}.*?\\end\{resumo\}",
    "keywords": r"\\textbf\{Palavras-chave\}",
    "introduction": r"\\chapter\{Introdução\}.*?\\label\{page:introducao:start\}",
    "objectives": r"\\chapter\{Objetivos\}.*?\\section\{Objetivo geral\}.*?\\section\{Objetivos específicos\}",
    "methodology": r"\\chapter\{Metodologia\}",
    "theoretical framework": r"\\chapter\{Referencial teórico\}",
    "results and discussion": r"\\chapter\{Resultados e discussão\}",
    "final considerations": r"\\chapter\{Considerações finais\}",
    "page limit labels": r"\\label\{page:referencias:start\}.*?\\label\{page:referencias:end\}",
    "references": r"\\begin\{thebibliography\}.*?\\end\{thebibliography\}",
}
for label, pattern in required.items():
    if not re.search(pattern, text, flags=re.S):
        errors.append(f"Falta item obrigatório do artigo do Projeto Integrador: {label}.")

if text.count(r"\item ") != 2:
    errors.append("O artigo deve conter exatamente dois objetivos específicos.")

citations = {
    key.strip()
    for group in re.findall(r"\\cite\{([^}]+)\}", text)
    for key in group.split(",")
}
references = set(re.findall(r"\\bibitem\{([^}]+)\}", text))
for key in sorted(citations - references):
    errors.append(f"Citação sem referência correspondente: {key}.")
for key in sorted(references - citations):
    errors.append(f"Referência não citada no texto: {key}.")
for url in re.findall(r"\\url\{([^}]+)\}", text):
    if not url.startswith("https://"):
        errors.append(f"URL não é HTTPS: {url}.")
for marker in ("[TODO]", "[FIXME]", "Lorem ipsum", "[INSERIR", "XX/XX/XXXX"):
    if marker.casefold() in text.casefold():
        errors.append(f"Marcador de rascunho não resolvido: {marker}.")

if errors:
    print("Artigo reprovado na verificação estrutural:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)
print(f"Artigo do Projeto Integrador {version}: estrutura, 2 objetivos, citações/referências e URLs verificados.")
print("A etapa de limites de páginas é conferida depois da compilação, a partir dos rótulos do PDF.")
