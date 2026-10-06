from pathlib import Path
import re
import sys


source = Path("article/main.tex")
text = source.read_text(encoding="utf-8")
paper_version = Path("article/VERSION").read_text(encoding="utf-8").strip()
errors: list[str] = []

required = {
    "title": r"\\titulo\{[^{}]+\}",
    "author": r"\\autor\{[^{}]+\}",
    "abstract": r"\\begin\{resumo\}.*?\\end\{resumo\}",
    "keywords": r"\\textbf\{Palavras-chave\}",
    "research method": r"\\section\{Método\}",
    "ABCD writing protocol": r"\\subsection\{Protocolo de escrita acadêmica ABCD\}",
    "originality protocol": r"\\subsection\{Protocolo de originalidade, atribuição e prevenção de plágio\}",
    "ethics and privacy": r"\\section\{Ética, privacidade e integridade\}",
    "limitations": r"\\section\{Limitações previstas\}",
    "references": r"\\begin\{thebibliography\}.*?\\end\{thebibliography\}",
}
for label, pattern in required.items():
    if not re.search(pattern, text, flags=re.S):
        errors.append(f"Falta item obrigatório do manuscrito: {label}.")

if f"\\newcommand{{\\paperversion}}{{{paper_version}}}" not in text:
    errors.append("A versão declarada no LaTeX não corresponde a article/VERSION.")

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
    print("Manuscrito reprovado na verificação estrutural:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Estrutura, citações, referências, URLs HTTPS e marcadores verificados.")
print("Esta verificação não certifica conformidade ABNT, ética ou validade científica.")
