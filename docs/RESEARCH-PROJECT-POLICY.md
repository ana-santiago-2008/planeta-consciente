# Política de projeto de pesquisa e TCC

## Status acadêmico

Este repositório é um projeto de pesquisa em desenvolvimento. A mudança para projeto de conclusão de curso (TCC) só pode ocorrer depois de aprovação explícita do discente, registrada em decisão versionada e confirmada pelo orientador ou instituição quando aplicável.

Estados permitidos: `pesquisa-em-planejamento`, `pesquisa-em-execucao`, `aguardando-aprovacao-discente`, `TCC-aprovado` e `arquivado`. O estado inicial é `pesquisa-em-planejamento`.

A aprovação não é inferida por commit, pull request, tag, CI ou publicação. Deve existir registro com data, identidade do aprovador, escopo aprovado, limitações e versão do artefato. Sem esse registro, o projeto permanece pesquisa.

## LaTeX obrigatório

A redação acadêmica, os elementos pré-textuais, textuais e pós-textuais e a versão de entrega devem ser mantidos em `latex/`. Arquivos Markdown podem documentar decisões e procedimentos, mas não substituem o manuscrito LaTeX.

O arquivo de entrada é `latex/main.tex`. A compilação deve ser reproduzível e gerar PDF validado. Dados, código, figuras, tabelas e referências devem manter rastreabilidade para a seção em que são utilizados.

## Normas utilizadas

- ABNT NBR 14724:2024: apresentação de trabalhos acadêmicos.
- ABNT NBR 10520:2023: citações.
- ABNT NBR 6023: referências.
- ABNT NBR 6024: numeração progressiva das seções.
- ABNT NBR 6027: sumário.
- ABNT NBR 6028: resumo.
- ABNT NBR 6034: índice.
- ABNT NBR 12225: lombada, quando houver versão encadernada.
- Norma de apresentação tabular do IBGE: tabelas.

As cópias locais fornecidas para este projeto devem ser conferidas contra a edição oficial e contra exigências da instituição. Nenhum template garante conformidade sem compilação, inspeção do PDF e revisão humana.

## ABCD–Feynman

Cada unidade argumentativa deve apresentar ideia delimitada, base verificável, interpretação acessível e desfecho coerente. Termos técnicos devem ser definidos, exemplos devem ser diferenciados de evidências e limitações devem ser registradas.

## Controle Git

Alterações devem ocorrer em branch de trabalho, usar Conventional Commits, passar por pull request e respeitar a proteção de `main`. Tags SemVer somente após aprovação e merge. A aprovação discente é um evento acadêmico distinto da aprovação técnica do pull request.

## Critérios de transição para TCC

- [ ] Problema, objetivos e método aprovados pelo discente.
- [ ] Referencial e referências conferidos.
- [ ] Manuscrito LaTeX compilado sem erros.
- [ ] PDF revisado conforme as normas aplicáveis.
- [ ] Dados, código e limitações rastreáveis.
- [ ] Aprovação discente registrada em `docs/decisoes/`.
- [ ] Orientação institucional registrada quando exigida.
