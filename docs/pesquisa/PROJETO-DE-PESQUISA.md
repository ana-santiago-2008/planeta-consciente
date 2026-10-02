# Projeto de pesquisa — versão de planejamento

## Título provisório

**Transparência das fontes e compreensão de conteúdo ambiental em um site educativo interativo: estudo de caso do Planeta Consciente**

## Estado do documento

Protocolo inicial para discussão, não relatório de resultados nem submissão pronta. As decisões pendentes estão no formulário de planejamento. Nenhum resultado é antecipado.

## Resumo

Este projeto propõe estudar como a rastreabilidade das fontes e a apresentação de conteúdo textual, gráficos e um mapa interativo influenciam a compreensão e a confiança percebida de pessoas que usam o Planeta Consciente, um site brasileiro de educação ambiental. A inspeção preliminar identificou dados quantitativos sem referências individualizadas e notícias sem links para as fontes, além de simplificações geográficas no mapeamento dos biomas. O estudo será conduzido como estudo de caso de métodos mistos, em duas etapas: (1) inventário e avaliação documental de afirmações, fontes, visualizações e interações; (2) avaliação formativa com usuários, mediante tarefas e questionário breve, após definição de população, amostra e salvaguardas éticas. Medidas possíveis incluem acerto em questões de compreensão, capacidade de localizar evidências, confiança calibrada e problemas observados de usabilidade. Os instrumentos e critérios serão definidos antes da coleta. A contribuição esperada é um diagnóstico reproduzível e recomendações de projeto para comunicar informação ambiental digital com maior transparência. A pesquisa não pretende inferir mudança de comportamento ambiental nem causalidade ampla a partir de uma avaliação pequena de um único site.

**Palavras-chave:** educação ambiental; visualização de dados; transparência de fontes; usabilidade; estudo de caso; engenharia de software.

## 1. Introdução e contexto

Sites educativos combinam conteúdo, visualizações e interação para explicar temas complexos. No Planeta Consciente, a página reúne informações sobre água, florestas, reciclagem, clima, sustentabilidade e biomas brasileiros. A inspeção exploratória mostra uma oportunidade de estudar a cadeia entre afirmação, fonte, representação visual e interpretação do visitante. Para tornar o conteúdo auditável, não basta inserir uma bibliografia geral: cada afirmação deve apontar para a fonte adequada e explicitar recorte, unidade e período; cada visualização deve permitir compreender o que os dados representam.

O problema empírico será delimitado após a autora responder ao formulário. A versão de partida é o equilíbrio entre fidelidade factual, compreensão e facilidade de uso, sem tratar cliques, satisfação ou intenção declarada como prova de aprendizagem ou mudança de comportamento.

## 2. Problema de pesquisa

Em que medida a rastreabilidade das afirmações e a apresentação de textos, gráficos e do mapa do Planeta Consciente permitem que usuários compreendam e verifiquem as informações ambientais comunicadas?

## 3. Objetivos

### Objetivo geral

Avaliar, em um estudo de caso, a rastreabilidade das informações e a compreensão/usabilidade do conteúdo ambiental apresentado pelo Planeta Consciente, produzindo recomendações verificáveis para sua evolução.

### Objetivos específicos

1. Inventariar afirmações factuais, quantitativas e geográficas do site e classificar sua evidência, atualidade, escopo e rastreabilidade.
2. Examinar se títulos, eixos, unidades, notas e legendas das visualizações comunicam adequadamente os dados representados.
3. Avaliar se participantes conseguem localizar a fonte de uma afirmação e responder perguntas de compreensão após tarefas realistas.
4. Identificar barreiras de usabilidade e acessibilidade no fluxo de navegação por texto, gráficos e mapa.
5. Formular recomendações e, se o escopo permitir, uma versão revisada do conteúdo acompanhada de critérios de aceitação.

## 4. Questões de pesquisa

- **QP1:** Que proporção das afirmações factuais e quantitativas do site tem fonte primária ou institucional rastreável, data/recorte e contexto suficientes para verificação?
- **QP2:** Quais erros ou ambiguidades de interpretação ocorrem ao usar as visualizações e o mapa para responder tarefas de compreensão?
- **QP3:** Como participantes avaliam confiança, clareza e esforço ao localizar evidências e interpretar o conteúdo?
- **QP4 (opcional, comparativa):** Uma versão revisada com fontes visíveis e metadados claros melhora a compreensão e a calibração da confiança em comparação à versão inicial?

QP4 só será usada com desenho comparativo, alocação e tamanho amostral justificados, protocolo prévio e controle de vieses. Caso contrário, o estudo será descritivo/formativo.

## 5. Delimitação e unidade de análise

- **Artefato:** versão identificada do site Planeta Consciente, incluindo página principal, conteúdo local, componentes de gráficos e mapa.
- **Unidade documental:** afirmação verificável (texto ou valor visual) e sua evidência associada.
- **Unidade de observação com usuários:** sessão individual de tarefas, respostas e comentários, se aprovada e escolhida.
- **Fora do escopo inicial:** medir mudança de atitude ou comportamento de longo prazo, representar todos os sites de educação ambiental, avaliar impacto ambiental real ou afirmar efeito causal sem experimento adequado.

## 6. Referencial e posicionamento metodológico

O estudo será reportado como estudo de caso de engenharia de software, com protocolo explícito, contexto do caso, seleção de participantes, triangulação de evidências, limitações e trilha de auditoria. A checklist ACM SIGSOFT para o método selecionado deve ser consultada antes de fechar o protocolo. A estrutura do relato seguirá elementos usuais de artigo científico (introdução, método, resultados, discussão, ameaças à validade, conclusão e referências); diretrizes da revista/conferência escolhida prevalecem sobre qualquer estilo genérico.

O estudo documental pode ser associado a avaliação de artefato/engenharia de software. Entrevistas ou questionários acrescentam componente qualitativo/descritivo. Uma comparação entre versões será experimental ou quase experimental somente se o desenho e a amostra permitirem inferência. Não misturar esses rótulos sem justificativa.

## 7. Método proposto

### Fase A — auditoria documental e de dados

1. Registrar hash/revisão ou pacote congelado do site, data, ambiente, rota e navegadores relevantes.
2. Extrair afirmações verificáveis de páginas, componentes e dados locais; definir regra para duplicatas e afirmações compostas.
3. Para cada item, preencher: identificador, texto, tipo (numérico, temporal, causal, geográfico), fonte, autoria institucional, data/ano, população/unidade, método, licença, correspondência da afirmação à fonte e decisão (confirmada, parcial, não localizada, desatualizada, enganosa/ambígua).
4. Fazer dupla codificação de uma amostra, calibrar o manual de codificação e reportar concordância adequada ao tipo de dado; resolver divergências por regra documentada.
5. Avaliar as visualizações quanto a título, unidade, denominador, período, escala, legenda, notas e consistência entre gráfico e fonte.

### Fase B — avaliação com usuários (opcional e sujeita a aprovação)

1. Definir população e critérios de inclusão/exclusão; recrutamento e compensação (se houver) serão transparentes.
2. Preparar tarefas curtas, por exemplo: localizar a fonte de uma afirmação; interpretar um gráfico; explicar o que o mapa permite ou não concluir; encontrar uma ação sustentável.
3. Usar roteiro de sessão e questionário padronizado. Registrar somente dados necessários, sem coleta oculta; gravação de tela/voz é opcional e requer consentimento específico.
4. Piloto com poucas pessoas para detectar ambiguidades; piloto não entra na análise principal se instrumento for alterado, salvo regra previamente definida.
5. Analisar respostas fechadas com estatística descritiva e intervalos quando apropriado; analisar comentários por codificação temática documentada. Relatar dados ausentes e desvios do protocolo.

### Desenho comparativo opcional

Se a pesquisadora escolher comparar versões, definir como única diferença principal a intervenção (por exemplo, fontes junto às afirmações e metadados uniformes), randomizar participantes ou justificar desenho alternativo, estabelecer desfecho primário antes da coleta e calcular amostra com base em efeito mínimo relevante. Comparar apenas resultados compatíveis; não chamar diferença descritiva de efeito causal.

## 8. Variáveis e operacionalização preliminar

| Conceito | Indicador candidato | Evidência |
|---|---|---|
| Rastreabilidade | Fração de afirmações com fonte identificável e correspondência verificável | Inventário e registro de decisões |
| Contextualização | Presença de data/recorte, unidade, população/denominador e método quando necessários | Rubrica previamente definida |
| Compreensão | Respostas corretas ou justificadas a perguntas específicas | Tarefas e gabarito validado |
| Localização de evidência | Sucesso e tempo para achar fonte relevante | Observação/registro da tarefa |
| Confiança calibrada | Confiança declarada relacionada à correção da resposta | Escala curta após cada tarefa |
| Usabilidade percebida | Clareza/esforço, complementado por problemas observados | Itens de questionário e notas |
| Acessibilidade funcional | Conclusão de tarefas por teclado/leitor de tela no escopo escolhido | Roteiro de inspeção e sessões adequadas |

As escalas, gabaritos, cortes e regras de codificação precisam ser escolhidos e documentados antes de analisar os dados principais.

## 9. Participantes, ética e privacidade

Não definido. Se houver participantes humanos, submeter o protocolo à instância ética institucional competente e obter aprovação/dispensa formal antes de recrutamento/coleta, conforme aplicável. Preparar informação clara sobre objetivo, voluntariedade, desistência, riscos, benefícios, dados coletados, retenção, acesso e contato responsável. Evitar recolher nome, e-mail, endereço IP ou dados sensíveis se não forem necessários. Definir armazenamento protegido, prazo de retenção, anonimização/pseudonimização e descarte. Considerar acessibilidade e evitar recrutamento de menores sem protocolo específico. A pesquisa não deve reutilizar dados do Analytics como dados individuais sem governança, base e autorização claramente estabelecidas.

## 10. Ameaças à validade

- **Construto:** acerto imediato não equivale a aprendizagem duradoura ou mudança de comportamento.
- **Interna:** familiaridade prévia, ordem das tarefas, dicas do facilitador e diferenças entre dispositivos podem influenciar respostas.
- **Externa:** um único site e amostra de conveniência limitam generalização.
- **Conclusão:** amostra pequena pode produzir estimativas imprecisas; múltiplas métricas aumentam risco de achados ocasionais.
- **Dados:** fontes ausentes ou conflitantes podem tornar classificação subjetiva; manual, dupla codificação e proveniência reduzem, mas não eliminam o risco.
- **Pesquisadora:** conhecimento do sistema pode enviesar auditoria; registrar decisões e solicitar revisão independente.

## 11. Plano de análise e reprodutibilidade

Publicar protocolo versionado, instrumento, manual de codificação, gabarito, ambiente e scripts analíticos quando possível. Manter registro de alterações e decisões. Disponibilizar dados anonimizados ou agregados somente quando permitido e com risco de reidentificação avaliado. Relatar resultados negativos, limitações e desvios. Não publicar material protegido/licenças incompatíveis.

## 12. Contribuições esperadas (não resultados)

- Mapa auditável entre afirmações do site e evidências.
- Diagnóstico documentado de compreensão e localização de fontes, se houver estudo com usuários.
- Recomendações priorizadas e critérios para validar futuras alterações.
- Protocolo, instrumento e pacote de replicação adequados às limitações éticas e de licenciamento.

## 13. Cronograma indicativo

| Etapa | Período relativo | Saída |
|---|---|---|
| Responder formulário e delimitar questão | Semana 1 | Protocolo delimitado |
| Busca e síntese de literatura; seleção do padrão SIGSOFT | Semanas 1–3 | Referencial e checklist |
| Inventário e piloto de auditoria factual | Semanas 3–5 | Base de afirmações e rubrica |
| Projeto do instrumento e avaliação ética | Semanas 5–8 (ou prazo institucional) | Instrumentos e decisão ética |
| Coleta/piloto com usuários, se aprovado | Semanas 9–11 | Dados documentados |
| Análise, revisão independente e redação | Semanas 12–14 | Relatório/artigo inicial |
| Revisão de reprodutibilidade e venue | Semana 15 | Pacote final para orientação/submissão |

Prazos são estimativas de planejamento e devem ser substituídos pelos prazos reais do curso/instituição.

## 14. Estrutura prevista para artigo

1. Título, autoria, resumo e palavras-chave.
2. Introdução e motivação.
3. Trabalhos relacionados e conceitos.
4. Método, contexto do caso, protocolo e materiais.
5. Resultados.
6. Discussão, implicações e ameaças à validade.
7. Conclusão e próximos passos.
8. Disponibilidade de artefatos/dados e referências.

O formato IEEE/ACM é uma decisão posterior, pois depende do veículo. Seguir template, limite de páginas, política de dados e instruções de autoria do venue escolhido; não presumir que IEEE seja obrigatório.

## Referências metodológicas iniciais

[1] ACM SIGSOFT, “Empirical Standards for Software Engineering.” Disponível em: [https://www2.sigsoft.org/EmpiricalStandards/](https://www2.sigsoft.org/EmpiricalStandards/). Acesso em: 2 out. 2026.

[2] P. Runeson, M. Höst, “Guidelines for conducting and reporting case study research in software engineering,” *Empirical Software Engineering*, vol. 14, pp. 131–164, 2009. doi: [10.1007/s10664-008-9102-8](https://doi.org/10.1007/s10664-008-9102-8).

[3] IEEE Author Center, “Structure Your Article.” Disponível em: [https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/create-the-text-of-your-article/structure-your-article/](https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/create-the-text-of-your-article/structure-your-article/). Acesso em: 2 out. 2026.

[4] ACM SIGSOFT, “Standards.” Disponível em: [https://www2.sigsoft.org/EmpiricalStandards/docs/standards](https://www2.sigsoft.org/EmpiricalStandards/docs/standards). Acesso em: 2 out. 2026.

## Referências de contexto a buscar na revisão (não inserir como suporte factual até leitura)

- Fontes brasileiras primárias para biomas, cobertura vegetal, água, energia e clima (por exemplo, IBGE, INPE, ANA, EPE, órgãos ambientais e bases oficiais), selecionadas conforme cada afirmação.
- Literatura revisada por pares sobre compreensão de gráficos, alfabetização de dados, rastreabilidade de informação e avaliação de sites de educação ambiental.
- Normas éticas e de proteção de dados vigentes na instituição e jurisdição da pesquisa.
