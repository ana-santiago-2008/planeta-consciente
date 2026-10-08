# Versionamento Git

## Fluxo

- `main` é a branch protegida de produção.
- Mudanças devem partir de `main` em branches de trabalho.
- Use `feature/<descricao>` para funcionalidades, `fix/<descricao>` para correções, `docs/<descricao>` para documentação e `chore/<descricao>` para manutenção.
- Toda mudança chega a `main` por pull request.
- O merge exige revisão humana e verificações automatizadas aplicáveis.
- Não fazer push direto em `main`.

A branch atual de aplicação usa o prefixo `codex/` para manter rastreabilidade da automação; novas mudanças devem preferir a convenção Gitflow acima.

## Conventional Commits

Use:

```
tipo(escopo): descrição imperativa
```

Tipos principais: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci` e `perf`.

Use `!` ou um rodapé `BREAKING CHANGE:` para mudanças incompatíveis.

## SemVer

Adote `MAJOR.MINOR.PATCH`:

- MAJOR: mudança incompatível.
- MINOR: funcionalidade compatível.
- PATCH: correção compatível.

A versão só deve ser criada após a aprovação e o merge em `main`. Tags devem usar o formato `vMAJOR.MINOR.PATCH`. Não atribuir versão automaticamente sem um baseline e uma decisão registrada.

## Proteção de main

A configuração recomendada para o administrador do repositório é:

- exigir pull request;
- exigir pelo menos uma revisão;
- exigir verificações de CI aprovadas;
- rejeitar force push e exclusão da branch;
- exigir branch atualizada antes do merge;
- restringir push direto a administradores somente quando necessário.

Como as permissões disponíveis nesta integração não expõem a API de regras de branch, a proteção efetiva deve ser confirmada nas configurações do GitHub em Settings > Branches ou Rules. Este documento não declara que a proteção remota já esteja ativa.

## Checklist

- [ ] Branch de trabalho criada a partir de `main`.
- [ ] Commit segue Conventional Commits.
- [ ] Testes e verificações executados.
- [ ] Pull request aberto contra `main`.
- [ ] Revisão humana concluída.
- [ ] SemVer avaliado.
- [ ] Tag `vMAJOR.MINOR.PATCH` criada somente após merge.
