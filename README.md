# Planeta Consciente

Site educativo em português brasileiro sobre sustentabilidade, meio ambiente e biomas do Brasil. O projeto apresenta conteúdos temáticos, gráficos, ações cotidianas e um mapa interativo.

## Tecnologias

- Next.js 16 e React 19
- TypeScript
- Tailwind CSS 4
- Recharts e `react-simple-maps`
- pnpm

## Desenvolvimento

Requer Node.js compatível com a versão atual do Next.js e pnpm.

```bash
pnpm install
pnpm dev
```

Para gerar a versão de produção:

```bash
pnpm build
pnpm start
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` gera uma exportação estática e publica automaticamente cada atualização da branch `main` em [https://ana-santiago-2008.github.io/planeta-consciente/](https://ana-santiago-2008.github.io/planeta-consciente/). Para a primeira publicação, em **Settings → Pages**, selecione **GitHub Actions** como origem de publicação. O diretório `out/` é gerado no build e enviado pelo workflow; ele não precisa ser commitado.

## Artigo do Projeto Integrador e releases

`article/main.tex` é o artigo do Projeto Integrador sobre o desenvolvimento do site, com fonte LaTeX, verificações de estrutura e citações e limites de páginas por seção validados no fluxo de release. O plano exploratório de eventual avaliação com usuários e os protocolos de escrita e originalidade permanecem em `docs/pesquisa/`. Não há resultados de estudo com participantes; o artigo relata a implementação e a verificação técnica do software. Cada tag `v*` aciona `.github/workflows/release.yml`, que compila o site estático e o PDF, verifica os limites de páginas e anexa ZIPs do site, PDF e fontes à GitHub Release. As versões do aplicativo e do artigo são mantidas separadamente em `package.json` e `article/VERSION`. Tags `-projeto.*` e `-protocolo.*` geram pré-lançamentos. Para uma nova versão, atualize as versões, revise o PDF e o build, crie uma tag no commit revisado e envie-a ao GitHub.
## Estrutura

- `app/`: entrada da página, layout e estilos globais.
- `components/`: seções e componentes interativos.
- `lib/site-data.ts`: conteúdo temático, gráficos, ações e itens apresentados como notícias.
- `lib/brazil-data.ts`: descrições dos biomas e associação simplificada estado-bioma.
- `public/`: imagens, ícones e dados geográficos.
- `docs/pesquisa/`: auditoria inicial, projeto de pesquisa e formulário para delimitar o estudo.

## Pesquisa acadêmica

Os documentos em [`docs/pesquisa/`](docs/pesquisa/) são materiais de planejamento, não resultados científicos. A auditoria é estática e preliminar. Afirmações ambientais, valores de gráficos e dados geográficos ainda precisam de verificação individual em fontes primárias antes de serem usados como informação validada.

## Licença

Consulte [`LICENSE`](LICENSE).
