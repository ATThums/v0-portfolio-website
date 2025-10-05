# Deploy para GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

## Configuração Inicial

1. **Ative o GitHub Pages no seu repositório:**
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"

2. **Ajuste o basePath (se necessário):**
   - Se o nome do seu repositório for diferente de `v0-portfolio-website`, edite o arquivo `next.config.mjs`
   - Altere o `basePath` e `assetPrefix` para o nome correto do seu repositório

## Deploy Automático

Toda vez que você fizer push para a branch `main`, o GitHub Actions irá:
1. Instalar as dependências
2. Fazer o build do projeto Next.js como site estático
3. Fazer deploy automático para o GitHub Pages

## Deploy Manual

Você também pode fazer deploy manual:
1. Vá em Actions no GitHub
2. Selecione o workflow "Deploy to GitHub Pages"
3. Clique em "Run workflow"

## Visualizar o Site

Após o deploy, seu site estará disponível em:
`https://[seu-usuario].github.io/v0-portfolio-website/`

## Desenvolvimento Local

Para testar localmente:
\`\`\`bash
npm run dev
\`\`\`

Para testar o build de produção:
\`\`\`bash
npm run build
npm run start
