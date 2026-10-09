/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DA CLÍNICA
 *  Tudo que é "dado do cliente" fica neste arquivo.
 *  Para adaptar o site a uma clínica real, substitua os valores
 *  marcados com [DEMO] / [PLACEHOLDER].
 * ============================================================
 */

export const clinic = {
  name: "Áurea",
  tagline: "Odontologia Integrada",
  fullName: "Áurea Odontologia Integrada",

  /** [PLACEHOLDER] Número fictício, só dígitos, com DDI+DDD. Troque pelo número real. */
  whatsappNumber: "5500000000000",
  /** Enquanto for true, o site exibe avisos de que é uma demonstração. */
  demoMode: true,

  /** Mensagem pré-preenchida do WhatsApp. */
  whatsappMessage:
    "Olá! Vi o site da Áurea Odontologia Integrada e gostaria de agendar uma consulta.",

  /** [PLACEHOLDER] Contatos exibidos no rodapé. */
  phoneDisplay: "(00) 0000-0000 [placeholder]",
  whatsappDisplay: "(00) 00000-0000 [placeholder]",

  /** [PLACEHOLDER] Endereço fictício. */
  address: {
    line1: "Endereço fictício, 000 [placeholder]",
    line2: "Bairro Exemplo · Cidade/UF",
    note: "Substitua pelo endereço real da clínica.",
  },

  /** [DEMO] Horários demonstrativos. */
  hours: [
    { label: "Segunda a sexta", value: "08h às 18h" },
    { label: "Sábado", value: "08h às 12h" },
    { label: "Domingo e feriados", value: "Fechado" },
  ],

  /** [DEMO] Redes sociais demonstrativas — não apontam para perfis reais. */
  social: [
    { label: "Instagram", href: "#", icon: "instagram" as const },
    { label: "Facebook", href: "#", icon: "facebook" as const },
  ],
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

/**
 * Imagens (Unsplash). Centralizadas aqui para facilitar a troca por fotos
 * reais da clínica. Cada imagem tem fallback visual caso a URL falhe.
 * Crédito: Unsplash (unsplash.com) — verifique a licença de cada foto antes de uso comercial.
 */
const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const images = {
  hero: {
    src: (w = 1100) => u("photo-1629909613654-28e377c37b09", w),
    alt: "Consultório odontológico moderno e iluminado, com cadeira e equipamentos organizados",
  },
  about: {
    src: (w = 900) => u("photo-1606811841689-23dfddce3e95", w),
    alt: "Profissional de odontologia conversando com uma paciente durante a consulta",
  },
  gallery: [
    {
      src: (w = 900) => u("photo-1588776814546-1ffcf47267a5", w),
      alt: "Sala de atendimento com cadeira odontológica e luz natural",
      label: "Consultório",
      ratio: "aspect-[4/5]",
    },
    {
      src: (w = 900) => u("photo-1598256989800-fe5f95da9787", w),
      alt: "Detalhe de equipamentos odontológicos em bancada limpa",
      label: "Detalhes da estrutura",
      ratio: "aspect-[4/3]",
    },
    {
      src: (w = 900) => u("photo-1609840114035-3c981b782dfe", w),
      alt: "Ambiente de atendimento com iluminação suave e decoração discreta",
      label: "Sala de espera",
      ratio: "aspect-square",
    },
    {
      src: (w = 900) => u("photo-1631217868264-e5b90bb7e133", w),
      alt: "Instrumentos odontológicos organizados em bandeja",
      label: "Esterilização e organização",
      ratio: "aspect-[3/4]",
    },
  ],
  treatments: {
    avaliacao: { src: (w = 700) => u("photo-1606811841689-23dfddce3e95", w), alt: "Avaliação odontológica em consultório" },
    limpeza: { src: (w = 700) => u("photo-1588776814546-1ffcf47267a5", w), alt: "Atendimento de limpeza e prevenção odontológica" },
    orto: { src: (w = 700) => u("photo-1598256989800-fe5f95da9787", w), alt: "Equipamentos usados em acompanhamento ortodôntico" },
    clareamento: { src: (w = 700) => u("photo-1609840114035-3c981b782dfe", w), alt: "Ambiente de atendimento para procedimentos estéticos" },
    implantes: { src: (w = 700) => u("photo-1631217868264-e5b90bb7e133", w), alt: "Instrumental odontológico preparado para atendimento" },
    estetica: { src: (w = 700) => u("photo-1629909613654-28e377c37b09", w), alt: "Consultório moderno para odontologia estética" },
  },
  team: [
    { src: (w = 600) => u("photo-1559839734-2b71ea197ec2", w), alt: "Retrato ilustrativo de uma profissional de saúde sorrindo" },
    { src: (w = 600) => u("photo-1612349317150-e413f6a5b16d", w), alt: "Retrato ilustrativo de um profissional de saúde de jaleco" },
    { src: (w = 600) => u("photo-1622253692010-333f2da6031d", w), alt: "Retrato ilustrativo de um profissional de saúde sorrindo" },
  ],
};

export const differentials = [
  {
    icon: "heart" as const,
    title: "Atendimento humanizado",
    text: "Escutamos antes de indicar qualquer caminho. Cada consulta começa pela sua história e pelas suas dúvidas.",
  },
  {
    icon: "scan" as const,
    title: "Tecnologia e precisão",
    text: "Equipamentos atuais apoiam o diagnóstico e ajudam a explicar cada etapa de forma clara e visual.",
  },
  {
    icon: "clipboard" as const,
    title: "Plano de tratamento individualizado",
    text: "Nada de pacotes prontos: o plano considera suas necessidades, seu tempo e o que faz sentido para você.",
  },
  {
    icon: "armchair" as const,
    title: "Ambiente confortável e acolhedor",
    text: "Espaços calmos, bem iluminados e pensados para que você chegue tranquilo e saia à vontade.",
  },
];

export const treatments = [
  {
    key: "avaliacao" as const,
    title: "Avaliação odontológica",
    text: "Primeira conversa e exame clínico para entender sua saúde bucal e organizar os próximos passos.",
  },
  {
    key: "limpeza" as const,
    title: "Limpeza e prevenção",
    text: "Cuidados de rotina e orientações para manter o acompanhamento da sua saúde bucal em dia.",
  },
  {
    key: "orto" as const,
    title: "Ortodontia",
    text: "Avaliação e acompanhamento do alinhamento dos dentes, com explicação das opções disponíveis.",
  },
  {
    key: "clareamento" as const,
    title: "Clareamento dental",
    text: "Atendimento voltado à estética do sorriso, precedido de avaliação individual na clínica.",
  },
  {
    key: "implantes" as const,
    title: "Implantes dentários",
    text: "Avaliação para reposição de dentes ausentes, com planejamento e esclarecimento de cada fase.",
  },
  {
    key: "estetica" as const,
    title: "Estética odontológica",
    text: "Procedimentos voltados à harmonia do sorriso, definidos em conjunto após a avaliação.",
  },
];

/** [DEMO] Profissionais fictícios — sem registros, títulos ou histórico. */
export const team = [
  {
    name: "Dra. Helena Exemplo",
    role: "Clínica geral · conteúdo fictício",
    text: "Perfil demonstrativo. Substitua pelo nome, registro profissional e apresentação real.",
  },
  {
    name: "Dr. Rafael Demonstrativo",
    role: "Área de atuação · conteúdo fictício",
    text: "Perfil demonstrativo. Inclua aqui a formação e a abordagem do profissional, com dados verificáveis.",
  },
  {
    name: "Dra. Camila Modelo",
    role: "Área de atuação · conteúdo fictício",
    text: "Perfil demonstrativo. Texto de exemplo para ilustrar o espaço reservado a cada integrante.",
  },
];

/** Alternativa aos depoimentos: etapas da experiência de atendimento. */
export const journey = [
  { step: "01", title: "Primeiro contato", text: "Você fala com a equipe pelo WhatsApp, tira dúvidas iniciais e escolhe um horário." },
  { step: "02", title: "Acolhimento", text: "Na chegada, uma recepção tranquila e sem pressa, com tempo para conversar." },
  { step: "03", title: "Avaliação", text: "Exame clínico e conversa franca sobre suas queixas, expectativas e prioridades." },
  { step: "04", title: "Plano e acompanhamento", text: "Quando indicado, o profissional apresenta as opções e explica cada etapa com clareza." },
];

export const faqs = [
  {
    q: "Como agendar uma consulta?",
    a: "O agendamento é feito pelo WhatsApp. Basta tocar em “Agendar consulta” e enviar a mensagem pronta; nossa equipe responde com os horários disponíveis.",
  },
  {
    q: "Quais tratamentos são oferecidos?",
    a: "A clínica apresenta avaliação odontológica, limpeza e prevenção, ortodontia, clareamento dental, implantes dentários e estética odontológica. A indicação de cada um depende da avaliação com o profissional.",
  },
  {
    q: "Como funciona a primeira avaliação?",
    a: "É uma consulta de conhecimento: o profissional conversa com você, faz o exame clínico e explica o que observou. Se houver indicação de tratamento, os próximos passos são apresentados com calma.",
  },
  {
    q: "Como posso tirar dúvidas antes de agendar?",
    a: "Você pode escrever para a equipe pelo WhatsApp a qualquer momento. Dúvidas sobre sua saúde bucal em particular são esclarecidas durante a consulta, pois exigem avaliação profissional.",
  },
  {
    q: "Como chegar à clínica?",
    a: "O endereço aparece no rodapé do site. Neste projeto demonstrativo ele é um placeholder; na versão final entram o endereço real, o link do mapa e as orientações de acesso.",
  },
];
