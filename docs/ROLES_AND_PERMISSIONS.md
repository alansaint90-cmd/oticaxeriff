# Roles e Permissões

Roles previstas:

- Administrador: acesso completo.
- Pastor: visão geral, pessoas, oração confidencial, conteúdo e QR.
- Secretaria: pessoas, visitantes, agenda, relatórios e conteúdo operacional.
- Integração: visitantes e acompanhamento.
- Discipulado: decisões e novos convertidos.
- Intercessão: pedidos de oração permitidos.
- Líder de ministério: interessados no próprio ministério.

As permissões estão centralizadas em `src/lib/auth/rbac.ts`.

Regras importantes:

- Não confiar em `user_metadata` para autorização Supabase.
- Usar claims de `app_metadata` ou tabela interna de usuários.
- Aplicar RBAC antes de expor dados no painel.
- Oração confidencial exige permissão `prayer:confidential`.
