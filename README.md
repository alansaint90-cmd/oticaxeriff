# IBA Conecta

Plataforma digital da IBA Litoral Norte para acolhimento, integração, discipulado, comunicação e acompanhamento de pessoas.

## Stack

- Next.js App Router
- React + TypeScript strict
- Tailwind CSS
- Drizzle ORM
- PostgreSQL 16, compatível com Supabase Postgres
- Supabase Auth para autenticação do painel
- Zod para validação server-side

## Começar

1. Copie `.env.example` para `.env.local`.
2. Configure `DATABASE_URL`.
3. Configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
4. Instale dependências com `npm install`.
5. Gere/aplique migrations com `npm run db:generate` e `npm run db:migrate`.
6. Rode `npm run dev`.

## Áreas

- Público: `/`, `/bem-vindo`, `/visitante`, `/proximo-passo`, `/decisao`, `/oracao`, `/batismo`, `/membresia`, `/ministerios`, `/servir`, `/agenda`, `/sobre`, `/doutrina`, `/lideranca`, `/localizacao`, `/contribua`, `/contato`.
- Admin: `/admin`, protegido por Supabase Auth.
- Kit da marca: `/admin/kit-da-marca`, com materiais oficiais hospedados em `public/brand-kit`.

Informações reais ainda não fornecidas aparecem como placeholders explícitos e devem ser cadastradas pelo painel.
