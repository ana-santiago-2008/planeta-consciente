# Auditoria inicial do Planeta Consciente

**Data:** 2 de outubro de 2026  
**Escopo:** leitura estática dos arquivos existentes; esta auditoria não é certificação de acessibilidade, revisão factual completa nem teste de execução.

## Visão geral

O repositório contém um site de página única em Next.js/React, em português brasileiro, dedicado a educação ambiental. A página principal compõe cabeçalho, hero, conscientização, temas, ações sustentáveis, curiosidades, mapa dos biomas, notícias e rodapé. Os dados editoriais ficam principalmente em `lib/site-data.ts` e `lib/brazil-data.ts`. Há gráficos em Recharts, mapa SVG interativo, fontes tipográficas Next, imagens estáticas e Analytics condicional para produção.

## Achados por prioridade

| Prioridade | Achado | Evidência | Consequência para estudo e evolução |
|---|---|---|---|
| Alta | Afirmações quantitativas e gráficos carecem de referências verificáveis por afirmação. | `lib/site-data.ts`: notas como “estimativas baseadas”, “aprox.” e “ilustrativo”, sem URL, data, método ou licença de dados. | Impede verificar validade, atualização e interpretação; criar registro de fontes, unidade, período, população/escopo e data de acesso. |
| Alta | A área “Notícias” apresenta manchetes e datas sem links para publicações originais. | `components/news-section.tsx`; `NewsItem` em `lib/site-data.ts` não possui URL nem autoria. | O visitante não consegue confirmar origem ou contexto; chamar de notícia pode sugerir reportagem real apesar de conteúdo não rastreável. |
| Alta | O mapa atribui um único bioma predominante a cada estado. | `stateBiome` em `lib/brazil-data.ts`. | Fronteiras de biomas não coincidem com limites estaduais; a simplificação pode induzir interpretação geográfica incorreta, embora o texto diga “predominante”. Deve ser explicada e validada contra cartografia oficial. |
| Média | Alguns gráficos têm valores cujas categorias não compõem claramente a grandeza apresentada. | Distribuição da água: 97,5 + 1,75 + 0,75 = 100, mas categorias precisam ser definidas (água doce/salgada e acessibilidade); composição elétrica soma 81%, sem indicar se são apenas parcelas ou qual o denominador. | Rótulos, denominadores e metadados são essenciais para interpretar visualizações; testar interpretação com usuários. |
| Média | Indicadores do mapa são valores pontuais sem data, fonte ou definição operacional explícita. | `vegetacaoRemanescente` por bioma; descrições de desmatamento e áreas protegidas em `lib/brazil-data.ts`. | Não há como reproduzir ou comparar estimativas; documentar recorte, ano, fonte e método de cálculo. |
| Média | A navegação pelo mapa é acionável via teclado, porém o SVG/path não implementa um padrão de grupo de controles nem anuncia seleção atual. | `components/brazil-map.tsx`; `tabIndex`, `role="button"`, eventos no `<path>`. | Pode tornar o uso assistivo confuso; verificar com teclado e leitor de tela, incluir estado selecionado e semântica apropriada. |
| Baixa | Os cartões de notícia parecem links, mas não são elementos de link. | `components/news-section.tsx` usa `ArrowUpRight` e texto “Ler resumo” em `<span>`. | Expectativa visual diverge da interação; decidir se são cartões informativos ou navegação para fontes e refletir semanticamente. |
| Baixa | Nome técnico do pacote permanece genérico e metadado `generator` identifica v0.app. | `package.json`, `app/layout.tsx`. | Questão de acabamento e proveniência, não necessariamente defeito funcional. Confirmar intenção antes de mudar. |

## Pontos positivos observados

- Componentes e dados estão separados de forma legível; o projeto já tem unidades conceituais naturais para testes de compreensão.
- O site usa `lang="pt-BR"`, controles com alguns nomes acessíveis, estado `aria-pressed`/`aria-expanded` em várias interações e foco visível provido pelo estilo do botão.
- Analytics é carregado somente em produção; ainda assim, eventual pesquisa com participantes deve esclarecer coleta, retenção e finalidade de dados.

## Limites desta auditoria

Foi feita inspeção estática de fontes selecionadas. Não houve revisão de cada frase contra fontes primárias, execução de testes, inspeção visual em diferentes telas, auditoria automatizada/manual de acessibilidade, consulta a usuários nem confirmação de métricas de tráfego. As questões acima são achados preliminares a validar, não conclusões sobre danos ou comportamento real.

## Próximos passos recomendados

1. Responder ao formulário de planejamento em `FORMULARIO-PLANEJAMENTO.md` e fechar o escopo.
2. Criar inventário de afirmações quantitativas e geográficas com fontes primárias e licenças.
3. Definir versão do site e protocolo antes de recrutar participantes.
4. Submeter a pesquisa com participantes à avaliação ética institucional aplicável antes da coleta; não coletar dados pessoais até definir aprovação/dispensa, consentimento e salvaguardas.
5. Publicar materiais, instrumentos e dados anonimizados quando permitido, com limites e instruções de reprodução.
