# Convem Test App Backend

## Descrição

Convem Test App Backend é uma aplicação que gerencia as rotas de convite. O projeto foi construído usando Fastify e permite que os usuários respondam a convites através de uma API.

## Rotas

- `POST /confirm`: Confirmar resposta ao convite. Aceita "SIM" ou "NAO" como resposta.

## Scripts

- `dev`: Observar e iniciar o servidor de desenvolvimento usando `tsx watch src/server.ts`.
- `lint`: Executar o ESLint em arquivos `.ts` na pasta `src` e corrigir problemas automaticamente.

## Dependências

### Desenvolvimento

- `@rocketseat/eslint-config`: `^2.1.0`
- `@types/node`: `^20.4.8`
- `tsx`: `^3.12.7`
- `typescript`: `^5.1.6`

### Produção

- `@fastify/cors`: `^8.3.0`
- `fastify`: `^4.21.0`
- `zod`: `^3.21.4`