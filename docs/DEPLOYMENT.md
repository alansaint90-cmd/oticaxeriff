# Deploy

## Variáveis

Configure:

- `DATABASE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`, apenas no servidor quando necessário
- `NEXT_PUBLIC_SITE_URL`

Nunca exponha service role no frontend.

## Passos

1. Provisionar PostgreSQL 16 ou Supabase.
2. Configurar Supabase Auth.
3. Executar migrations Drizzle.
4. Criar usuário administrador com role em `app_metadata`.
5. Publicar aplicação Next.js.
6. Configurar domínio, sitemap, robots e analytics.

## Segurança

Habilite RLS no Supabase para tabelas em schemas expostos. Garanta policies específicas por papel/linha antes de conceder acesso via Data API.
