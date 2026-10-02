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
