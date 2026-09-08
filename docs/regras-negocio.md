# Regras de Negócio

- Toda pessoa cadastrada por formulário público gera um registro em `people`.
- Formulário de visitante gera registro em `visitors` e evento de timeline.
- Decisão por Jesus gera registro em `decisions` e entrada no funil de novos convertidos.
- Interesse em batismo ou membresia usa `processes` com `type` e `stage`.
- Pedido de oração confidencial não pode ser exibido a usuários sem permissão.
- Interesse em ministério gera `ministry_interests`.
- Interesse em servir permite até 3 ministérios.
- Ministérios iniciais são organizados por gestão ministerial: Adoração, IBA Social & Cultural, Ministério da Família, Jornada, Igreja Kids e Diaconia.
- Conteúdo institucional oficial inicial foi fornecido pela liderança: IBA Litoral Norte, Quem somos, Missão/Visão/Sonho e Nossos pastores.
- A seção pública de doutrina deve apresentar resumo acessível e permitir consulta/download dos documentos completos.
- QR Codes registram destino, scans e conversões.
- Conteúdo público principal deve ser editável via `pages` ou `settings`.
- Informações institucionais reais não fornecidas devem permanecer como placeholders explícitos.
