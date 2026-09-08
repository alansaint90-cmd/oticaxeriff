# Banco de Dados

Entidades principais implementadas no schema Drizzle:

- `users`, `roles`, `permissions`, `role_permissions`
- `people`, `visitors`, `decisions`, `prayer_requests`
- `ministries`, `ministry_interests`
- `events`, `event_registrations`
- `processes` para batismo e membresia
- `volunteer_interests`
- `followups`, `tasks`, `timeline_events`
- `qr_codes`, `qr_scans`
- `notifications`
- `pages`, `settings`, `leaders`, `contributions_settings`, `media`
- `contact_messages`, `audit_logs`

Todas as tabelas possuem:

- `created_at`
- `updated_at`
- `deleted_at`
- `is_deleted`
- `modified_by`

Deletes devem ser lógicos. FKs usam `RESTRICT` em dados críticos.

## Gestão ministerial

`ministries` possui área ministerial para agrupar subáreas como Adoração, IBA Social & Cultural, Ministério da Família, Jornada, Igreja Kids e Diaconia.

## LGPD

Formulários públicos incluem consentimento. Pedidos de oração podem ser anônimos ou confidenciais. A leitura de dados confidenciais deve ser permitida apenas para roles autorizadas.
