# Arquitetura

O projeto usa App Router com separação por responsabilidade:

- `src/app`: rotas públicas, admin e API.
- `src/components`: design system, layouts e componentes reutilizáveis.
- `src/lib/actions`: server actions validadas.
- `src/lib/db`: Drizzle client, schema e migrations.
- `src/lib/repositories`: leitura para painel e relatórios.
- `src/lib/auth`: sessão Supabase e RBAC.
- `src/lib/validators`: schemas Zod.
- `src/lib/content`: conteúdo inicial editável/placeholder.
- `public/brand-kit`: materiais oficiais de marca, artes e downloads exibidos no painel.

## Decisões

- Drizzle foi escolhido por instrução do agente. Prisma e SQLite não são usados.
- PostgreSQL 16 é o banco alvo; Supabase pode hospedar Postgres/Auth/Storage.
- Forms públicos gravam pessoa, registro específico e timeline.
- Identidade visual usa o kit oficial da IBA Litoral Norte hospedado no projeto.
- Conteúdo institucional inicial fica centralizado em `src/lib/content/institutional-content.ts` para uso em Home, Sobre e Liderança, com migração futura para CMS.
- Conteúdo doutrinário público fica centralizado em `src/lib/content/doctrine-content.ts`, com PDFs completos hospedados em `public/doutrina`.
- Dados confidenciais, como oração confidencial, exigem RBAC no painel.
- Soft delete é padrão em todas as entidades.

## Evolução

A modelagem deixa espaço para pequenos grupos, cursos, presença, check-in infantil, escalas, app mobile, push, WhatsApp API, área do membro e biblioteca de mensagens.
