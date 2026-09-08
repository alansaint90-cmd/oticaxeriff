import {
  CalendarDays,
  Cross,
  Droplets,
  HandHeart,
  HeartHandshake,
  MapPin,
  Users,
  UserRound
} from "lucide-react";

export const quickAccess = [
  { title: "Sou visitante", description: "Queremos conhecer você.", cta: "Começar", href: "/visitante", icon: UserRound },
  {
    title: "Entreguei minha vida a Jesus",
    description: "Queremos caminhar com você nessa nova jornada.",
    cta: "Meu próximo passo",
    href: "/decisao",
    icon: Cross
  },
  { title: "Preciso de oração", description: "Queremos orar com você e por você.", cta: "Enviar pedido", href: "/oracao", icon: HandHeart },
  { title: "Quero me batizar", description: "Entenda essa jornada de fé.", cta: "Saiba como", href: "/batismo", icon: Droplets },
  { title: "Quero ser membro", description: "Faça parte da família IBA.", cta: "Conhecer o processo", href: "/membresia", icon: Users },
  { title: "Quero servir", description: "Descubra onde seus dons podem florescer.", cta: "Conhecer ministérios", href: "/servir", icon: HeartHandshake },
  { title: "Cultos e eventos", description: "Acompanhe nossa programação.", cta: "Ver agenda", href: "/agenda", icon: CalendarDays },
  { title: "Como chegar", description: "Encontre a IBA Litoral Norte.", cta: "Abrir localização", href: "/localizacao", icon: MapPin }
];

export const nextSteps = [
  ["Estou visitando a IBA", "Seu próximo passo: conhecer melhor nossa igreja."],
  ["Quero conhecer Jesus", "Seu próximo passo: conversar com alguém sobre o Evangelho."],
  ["Entreguei minha vida a Jesus", "Seu próximo passo: iniciar sua jornada de discipulado."],
  ["Reconciliei-me com Jesus", "Seu próximo passo: retomar sua caminhada e receber acompanhamento."],
  ["Quero me batizar", "Seu próximo passo: participar da preparação para o batismo."],
  ["Quero fazer parte da IBA", "Seu próximo passo: conhecer nossa jornada de membresia."],
  ["Já sou membro e quero servir", "Seu próximo passo: encontrar um ministério."],
  ["Quero crescer espiritualmente", "Seu próximo passo: participar de estudos, pequenos grupos e discipulado."]
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const ministryGroupsSource = [
  {
    name: "Adoração",
    description: "Expressões de louvor, arte, comunicação visual e criatividade a serviço da igreja.",
    ministries: ["IBA Music", "IBA Creative"]
  },
  {
    name: "IBA Social & Cultural",
    description: "Frentes de cuidado, evangelização, impacto social e missão.",
    ministries: ["Ação Social", "Evangelismo", "Missões"]
  },
  {
    name: "Ministério da Família",
    description: "Cuidado e comunhão para diferentes fases da vida familiar.",
    ministries: ["Homens", "Mulheres", "Casais", "Jovens", "Idosos"]
  },
  {
    name: "Jornada",
    description: "Integração, acolhimento, voluntariado e caminhos de crescimento na comunidade.",
    ministries: ["Recepção", "Acolhimento", "Voluntariado", "PGs", "Raízes", "Café em Comunhão"]
  },
  {
    name: "Igreja Kids",
    description: "Ambientes, equipes e experiências de discipulado para crianças.",
    ministries: [
      "Louvor e Artes",
      "Recepção e Credenciamento",
      "Planejamento das Aulas",
      "Escolha do Material Didático",
      "Eventos Especiais",
      "Sala Acolhimento",
      "Sala Sementinhas 0 a 2 anos",
      "Sala Cordeirinhos a 5 anos",
      "Sala Pequeninos 6 a 8 anos",
      "Sala Discípulos 9 a 11 anos"
    ]
  },
  {
    name: "Diaconia",
    description: "Serviço prático, cuidado operacional e apoio às celebrações e à comunidade.",
    ministries: ["Mercado Solidário", "Bazar", "Brigada de Emergência", "Estacionamento", "Segurança", "Ofertório", "Intercessão", "Santa Ceia"]
  }
];

export const ministryGroups = ministryGroupsSource.map((group) => ({
  ...group,
  slug: slugify(group.name),
  ministries: group.ministries.map((name) => ({
    name,
    slug: slugify(`${group.name}-${name}`),
    groupName: group.name,
    groupSlug: slugify(group.name),
    description: "Informações editáveis pelo painel administrativo.",
    verse: "Versículo ou frase a cadastrar",
    leaderName: "Líder a cadastrar",
    meetingDays: "Dias a cadastrar",
    meetingTime: "Horário a cadastrar",
    location: "Local a cadastrar"
  }))
}));

export const ministrySeeds = ministryGroups.flatMap((group) => group.ministries);

export const eventSeeds = [
  {
    name: "Culto principal",
    type: "Culto",
    date: "Data a cadastrar",
    description: "Programação editável no painel administrativo."
  },
  {
    name: "Encontro de novos",
    type: "Integração",
    date: "Data a cadastrar",
    description: "Espaço para acolhimento e próximos passos."
  }
];
