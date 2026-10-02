# Workflow de escrita e publicação acadêmica — Computação

Este fluxo trata `article/main.tex` como **protocolo exploratório de compreensão e experiência de uso**, ainda sem resultados. As respostas ao formulário indicam tarefas sobre gráficos e mapa de biomas, questionário remoto, estimativa de 9–20 participantes, preferência ABNT e prazo de 30/10/2026. O público, a faixa etária, orientação acadêmica, instrumento final e o rito ético seguem indefinidos. Não recrutar nem coletar até consulta institucional e aprovação ética aplicável.

## 1. Portas de qualidade

| Classe | Requisito | Evidência/porta de saída |
|---|---|---|
| **Obrigatório antes da submissão** | Escolher periódico/evento e seguir primeiro suas instruções, template, escopo, limite de palavras/páginas, anonimização, direitos e política de dados. | Checklist do veículo datada e anexada ao registro da versão. |
| **Obrigatório** | Não inventar dados, resultados, citações, autoria, aprovação ética ou conformidade. Diferenciar protocolo, resultado, hipótese e resultado esperado. | Revisão autora; seção e resumo coerentes com estágio real. |
| **Obrigatório em cada seção** | Registrar cada ideia externa na matriz de leitura; distinguir transcrição, paráfrase e síntese; citar na redação; conferir citações/referências e originalidade intelectual. | Protocolo de originalidade preenchido e lista de pendências zerada antes da submissão. |
| **Obrigatório para texto próprio reutilizado** | Conferir versões anteriores, trabalhos de curso, resumos, preprints e apresentações; citar/divulgar sobreposição e seguir política do venue; não submeter simultaneamente nem fragmentar resultados. | Registro de divulgação prévia/autorreuso revisado antes da submissão. |
| **Obrigatório** | Estruturar artigo com base na ABNT NBR 6022:2018 quando a instituição/venue exigir ABNT; citar pela NBR 10520:2023; referências pela NBR 6023:2025; resumos pela NBR 6028:2021; numeração pela NBR 6024:2012. Conferir edição no catálogo e regras do venue na data de cada release. | Checklist manual baseada em acesso lícito à norma completa e template do venue. O ano 2025 da NBR 6023 foi confirmado em guias de bibliotecas universitárias. |
| **Obrigatório quando aplicável** | Se entregar TCC/monografia, verificar NBR 14724:2024 e manual institucional; não impor automaticamente sua diagramação a artigo de periódico. | Aprovação formal do formato pela instituição/curso. |
| **Obrigatório antes de pesquisa com pessoas** | Definir público/idade, tarefas, consentimento, riscos, retirada, coleta e salvaguardas; consultar o curso, a instituição e o CEP e obter a decisão/aprovação necessária antes de convite, piloto ou coleta. Considerar Lei 14.874/2024, Decreto 12.651/2025 e Resolução CNS 510/2016 sem presumir dispensa para questionário anônimo de compreensão. | Decisão institucional e protocolo aprovado guardados fora do repositório público. |
| **Obrigatório para qualquer dado pessoal** | Mapear finalidade, papéis institucionais, hipótese legal, minimização, transparência, segurança, direitos, retenção e descarte. Configurar formulário para não exigir login/e-mail quando dispensável e conferir metadados/logs da plataforma. | Plano de dados revisado pela instituição/encarregado quando aplicável; sem dados brutos de participantes em releases. |
| **Obrigatório para integridade** | Garantir citação e correspondência fonte-citação, autoria baseada em contribuição, limitações, resultados contrários e contribuição individual. Declarar apoio de IAG conforme política do venue/instituição e regras do CNPq se aplicáveis. | Declarações revisadas e aprovadas por cada autor. |
| **Obrigatório para release reprodutível** | Compilar o site e o artigo a partir do mesmo commit/tag; disponibilizar PDF, pacote estático e fonte; registrar versões de Node/pnpm/TeX e hash do commit. | Workflow `release.yml` verde e artefatos anexados à GitHub Release. |
| **Obrigatório ao usar IAG** | Declarar ferramenta e finalidade conforme CNPq, instituição e veículo; validar manualmente citações, fatos, paráfrases e originalidade; nunca atribuir autoria à ferramenta nem submeter conteúdo gerado sem revisão. | Declaração aprovada pela autora, com responsabilidades explicitadas. |
| Preferível | Adotar padrão empírico ACM SIGSOFT correspondente ao estudo de caso e à avaliação exploratória com usuários; não chamar o questionário de experimento. | Checklist metodológica anexada ao protocolo. |
| Preferível | Revisão por orientador/especialista do instrumento, gabarito e critérios; registrar fonte primária, denominador, decisões e limitações. | Instrumento e registro versionados antes de qualquer coleta aprovada. |
| Preferível | Preservar código, protocolo, dados públicos e script de análise; publicar apenas dados anonimizados/agregados quando permitido. | Pacote de reprodução sem PII, segredo, consentimento ou dado restrito. |

**Limite importante do LaTeX:** compilar com `abntex2` não prova conformidade completa. A suíte `abntex2cite` declara suporte bibliográfico legado; não confiar nela como garantia da NBR 6023:2025. O manuscrito usa citação numérica e referências explicitamente editadas, mas a checagem de cada campo precisa ser feita contra a norma vigente licenciada e o veículo. A norma integral da ABNT tem direitos autorais; este repositório armazena referências e guias públicos, não cópias não autorizadas.

**Regra de integridade:** ABNT organiza como citar e referenciar; não mede originalidade nem define score antiplágio. Consulte [`PROTOCOLO-ORIGINALIDADE.md`](PROTOCOLO-ORIGINALIDADE.md) e preencha o registro de auditoria por versão. Ferramentas de similaridade são apoio: revise cada trecho e fonte, sem limiar automático. Leia política de armazenamento/indexação antes de enviar trabalho inédito a serviço externo.

## 2. Sequência recomendada

1. **Delimitar**: confirmar prazo do curso, público elegível e idade; fechar pergunta, objetivo, tarefas, resultados observáveis e exclusões. Não prometer “efeito educativo” sem desenho e medida de aprendizagem.
2. **Resolver ética antes de participantes**: consultar orientação/instituição e CEP, confirmar instância e avaliação aplicáveis à luz da legislação atual; não recrutar, pilotar com participantes ou coletar enquanto isso estiver pendente.
3. **Organizar a literatura**: usar gerenciador bibliográfico, conferir metadados na fonte original e manter matriz com ideia, localização, tipo de nota e citação prevista.
4. **Congelar protocolo**: registrar versão/hash do site, estímulos, gabarito e fontes, instrumento, consentimento, plano de dados, critérios de inclusão, análise descritiva e ameaças à validade antes da coleta.
5. **Validar instrumento**: revisar tarefas sobre compreensão de gráfico e leitura de estado/bioma; decidir se haverá busca de fonte; definir respostas aceitáveis com IBGE/INPE e avaliar separadamente se a acessibilidade tem método viável.
6. **Coletar após liberação**: divulgar participação voluntária no público autorizado; registrar apenas dados mínimos; assegurar privacidade na plataforma e armazenar em local institucional restrito.
7. **Analisar**: reportar números e denominadores por tarefa, distribuições de clareza/confiança e dificuldades; explicitar amostra pequena/de conveniência; não inferir causalidade, efeito de aprendizagem ou prevalência ampla.
8. **Escrever com atribuição**: redigir da matriz de evidências, sinalizar transcrições, citar também paráfrases, sintetizar fontes e conferir fidelidade, versões próprias, imagens e código.
9. **Auditar similaridade e normalizar**: se autorizada, usar ferramenta de similaridade como apoio; revisar correspondências uma a uma e registrar decisões, sem limiar automático. Aplicar template do veículo e revisar referências/citações manualmente.
10. **Congelar release**: checar versão do app/artigo, commit, PDF e export; nunca sobrescrever release publicada; verificar que nenhum dado pessoal ou bruto foi incluído.

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
- **Pesquisa em Ciências Humanas e Sociais — Resolução CNS 510/2016:** [texto oficial do CNS](https://www.gov.br/conselho-nacional-de-saude/pt-br/atos-normativos/resolucoes/2016/resolucao-no-510.pdf/view). A aplicação e a instância responsável devem ser confirmadas institucionalmente, inclusive diante da legislação posterior.
- **Orientação LGPD para pesquisa:** [Guia da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-tratamento-de-dados-pessoais-para-fins-academicos-e-para-a-realizacao-de-estudos-e-pesquisas).
- **Integridade científica e declaração de IAG, quando aplicável:** [Diretrizes do CNPq](https://www.gov.br/cnpq/pt-br/composicao/comissao-de-integridade/diretrizes).
- **Prevenção de plágio e reciclagem textual:** [COPE — Text recycling guidelines](https://publicationethics.org/files/Web_A29298_COPE_Text_Recycling.pdf); [protocolo deste projeto](PROTOCOLO-ORIGINALIDADE.md).
- **Ferramentas de similaridade:** [Crossref — interpretar Similarity Report](https://www.crossref.org/documentation/similarity-check/similarity-report-understand/); [Turnitin — similaridade não decide plágio](https://helpcenter.turnitin.com/hc/en-us/articles/27811925295501-Plagiarism-and-what-are-acceptable-similarity-scores); [CopySpider — funcionamento](https://copyspider.com.br/main/pt-br/how-it-works).
- **Gestão bibliográfica:** [Zotero — integração com processadores de texto](https://www.zotero.org/support/word_processor_integration); confira manualmente estilo e dados de cada referência.
- **Dados ambientais:** [Biomas e Sistema Costeiro-Marinho do IBGE](https://www.ibge.gov.br/geociencias/informacoes-ambientais/vegetacao/15842-biomas.html?lang=pt-BR); [TerraBrasilis/INPE](https://terrabrasilis.dpi.inpe.br/).
- **Métodos empíricos de engenharia de software:** [ACM SIGSOFT Empirical Standards](https://www2.sigsoft.org/EmpiricalStandards/).
