# Workflow de escrita e publicação acadêmica — Computação

Este fluxo trata o manuscrito em `article/main.tex` como **protocolo preliminar de auditoria documental**, não como artigo com resultados já obtidos. A autora indicou prazo inferior a um mês, interesse em confiabilidade factual, notícias e aprendizagem, e ainda não definiu orientação/venue. Por isso, a primeira versão não inclui avaliação com participantes nem afirma efeito educativo. O escopo pode ser ampliado somente com tempo, desenho e revisão ética apropriados.

## 1. Portas de qualidade

| Classe | Requisito | Evidência/porta de saída |
|---|---|---|
| **Obrigatório antes da submissão** | Escolher periódico/evento e seguir primeiro suas instruções, template, escopo, limite de palavras/páginas, anonimização, direitos e política de dados. | Checklist do veículo datada e anexada ao registro da versão. |
| **Obrigatório** | Não inventar dados, resultados, citações, autoria, aprovação ética ou conformidade. Diferenciar protocolo, resultado, hipótese e resultado esperado. | Revisão autora; seção e resumo coerentes com estágio real. |
| **Obrigatório** | Estruturar artigo com base na ABNT NBR 6022:2018 quando a instituição/venue exigir ABNT; citar pela NBR 10520:2023; referências pela NBR 6023:2025; resumos pela NBR 6028:2021; numeração pela NBR 6024:2012. Conferir edição no catálogo e regras do venue na data de cada release. | Checklist manual baseada em acesso lícito à norma completa e template do venue. O ano 2025 da NBR 6023 foi confirmado em guias de bibliotecas universitárias. |
| **Obrigatório quando aplicável** | Se entregar TCC/monografia, verificar NBR 14724:2024 e manual institucional; não impor automaticamente sua diagramação a artigo de periódico. | Aprovação formal do formato pela instituição/curso. |
| **Obrigatório antes de pesquisa com pessoas** | Consultar o CEP/instituição e obter a avaliação ética necessária antes de recrutamento/coleta; descrever consentimento, risco, desistência, público, dados, retenção e salvaguardas. Considerar Lei 14.874/2024 e Decreto 12.651/2025, além de orientações institucionais atuais. | Parecer/decisão ética e protocolo aprovado guardados fora do repositório público. |
| **Obrigatório para qualquer dado pessoal** | Mapear finalidade, papéis institucionais, hipótese legal, minimização, transparência, segurança, direitos dos titulares, retenção e descarte conforme LGPD e orientação ANPD. A exceção acadêmica do art. 4º não elimina a aplicação dos arts. 7º e 11 nem é dispensa geral. | Plano de dados revisado pela instituição/encarregado quando aplicável; sem dados pessoais em releases. |
| **Obrigatório para integridade** | Garantir citação e correspondência fonte-citação, autoria baseada em contribuição, limitações, resultados contrários e contribuição individual. Declarar apoio de IAG conforme política do venue/instituição e regras do CNPq se aplicáveis. | Declarações revisadas e aprovadas por cada autor. |
| **Obrigatório para release reprodutível** | Compilar o site e o artigo a partir do mesmo commit/tag; disponibilizar PDF, pacote estático e fonte; registrar versões de Node/pnpm/TeX e hash do commit. | Workflow `release.yml` verde e artefatos anexados à GitHub Release. |
| Preferível | Adotar padrão ACM SIGSOFT correspondente ao desenho efetivamente escolhido (estudo de caso/avaliação de artefato); não chamar auditoria documental de experimento. | Checklist metodológica anexada ao protocolo. |
| Preferível | Dupla codificação de amostra, piloto da rubrica, decisões versionadas, fonte primária/institucional, URL direta, data de acesso, unidade, denominador, período, licença e limitações por afirmação. | Inventário anonimizado e registro de decisões. |
| Preferível | Preservar código, protocolo, dados públicos e script de análise; publicar apenas dados anonimizados/agregados quando permitido. | Pacote de reprodução sem PII, segredo, consentimento ou dado restrito. |

**Limite importante do LaTeX:** compilar com `abntex2` não prova conformidade completa. A suíte `abntex2cite` declara suporte bibliográfico legado; não confiar nela como garantia da NBR 6023:2025. O manuscrito usa citação numérica e referências explicitamente editadas, mas a checagem de cada campo precisa ser feita contra a norma vigente licenciada e o veículo. A norma integral da ABNT tem direitos autorais; este repositório armazena referências e guias públicos, não cópias não autorizadas.

## 2. Sequência recomendada

1. **Delimitar**: formular problema, QP, objetivo, contribuição, tipo de artigo, corpus, exclusões e prazo. Não prometer “efeito educativo” se não houver medida de aprendizagem.
2. **Congelar protocolo**: registrar versão, hash do site, fontes prioritárias, consultas, unidade de análise, regras de inclusão/exclusão, rubrica, plano de síntese e ameaças à validade antes de observar contagens.
3. **Fazer busca reprodutível**: começar por fonte primária/órgão responsável; guardar consulta, URL, data de acesso, edição/ano, recorte geográfico/temporal e evidência. Não aceitar resultados de busca ou texto de IA como fonte factual.
4. **Codificar**: preencher inventário item a item; separar fato verificável, recomendação, opinião e chamada editorial; marcar ausências e incertezas sem inferir falsidade.
5. **Analisar**: calcular denominadores explícitos, relatar dados ausentes e divergências; ancorar cada conclusão em itens da matriz; preservar achados que contrariem a hipótese.
6. **Escrever**: introdução termina em questão/contribuição; método permite repetir; resultados reportam apenas dados coletados; discussão explica limites; conclusão responde à pergunta sem generalizar além do corpus.
7. **Normalizar**: usar o template do venue; verificar estrutura, resumo/abstract, palavras-chave, citações, referências, figuras/tabelas, licenças, anonimização e declarações. Revisão humana final é obrigatória.
8. **Congelar release**: checar que a versão do app e do artigo, commit, PDF e export estática correspondem; gerar tag sem sobrescrever uma release já publicada; revisar conteúdo dos artefatos para PII e segredos.

## 3. Uso de ferramentas e versões

- Edite o artigo em `article/main.tex`; fontes de texto, versão e materiais adjacentes ficam sob `article/`.
- A versão do app fica em `package.json`; a do artigo fica em `article/VERSION`. A tag `v*` identifica o snapshot de release que contém ambas.
- O workflow de `main` publica o Next.js em GitHub Pages. O workflow de tag executa o export estático, verifica o manuscrito, compila PDF com TeX Live e anexa ZIPs do app, PDF e fonte a uma pré-release para tags com `-protocolo.`.
- Nunca versionar arquivos de `.env`, dados brutos identificáveis, TCLE, listas de recrutamento, e-mails, nomes de participantes ou notas de campo com dados pessoais. Manter esses itens em armazenamento institucional restrito.
- A declaração de IAG deve identificar ferramenta e finalidade, ser conferida pela autora e obedecer às normas aplicáveis. A pesquisadora responde pela exatidão, originalidade, citações e texto final.

## 4. Fontes brasileiras rastreáveis consultadas

- **ABNT NBR 6023:2025:** guia da Biblioteca da UFES registra que a edição 2025 incorpora a Emenda 1 e cancela/substitui 2018: [guia da UFES](https://engenhariaedesenvolvimentosustentavel.ufes.br/sites/engenhariaedesenvolvimentosustentavel.ufes.br/files/field/anexo/abnt_nbr_6023_-_referencias.pdf). Consulte a norma integral via [Catálogo ABNT](https://www.abntcatalogo.com.br/).
- **ABNT NBR 6022:2018, 10520:2023, 6028:2021, 6024:2012:** consulte as normas no catálogo e as [orientações de normalização da Unicamp](https://www3.eco.unicamp.br/biblioteca/servicos/servico-de-referencia/normalizacao-de-trabalhos-academicos). Os guias apoiam interpretação, mas não substituem a norma completa.
- **NBR 14724:2024:** [guia da UFES](https://engenhariaedesenvolvimentosustentavel.ufes.br/sites/engenhariaedesenvolvimentosustentavel.ufes.br/files/field/anexo/abnt_nbr_14724.pdf), aplicável quando exigida para trabalho acadêmico institucional.
- **LGPD — Lei 13.709/2018, texto compilado:** [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm).
- **Pesquisa com pessoas — Lei 14.874/2024:** [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14874.htm); **Decreto 12.651/2025:** [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12651.htm).
- **Orientação LGPD para pesquisa:** [Guia da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-tratamento-de-dados-pessoais-para-fins-academicos-e-para-a-realizacao-de-estudos-e-pesquisas).
- **Integridade científica e declaração de IAG, quando aplicável:** [Diretrizes do CNPq](https://www.gov.br/cnpq/pt-br/composicao/comissao-de-integridade/diretrizes).
- **Dados ambientais:** [Biomas e Sistema Costeiro-Marinho do IBGE](https://www.ibge.gov.br/geociencias/informacoes-ambientais/vegetacao/15842-biomas.html?lang=pt-BR); [TerraBrasilis/INPE](https://terrabrasilis.dpi.inpe.br/).
- **Métodos empíricos de engenharia de software:** [ACM SIGSOFT Empirical Standards](https://www2.sigsoft.org/EmpiricalStandards/).
