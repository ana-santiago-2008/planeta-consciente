export type Topic = {
  id: string
  eyebrow: string
  title: string
  image: string
  intro: string
  points: string[]
  chartType: 'bar' | 'line' | 'donut'
  chartTitle: string
  chartUnit: string
  chartData: { label: string; value: number }[]
  chartNote: string
}

export const topics: Topic[] = [
  {
    id: 'agua',
    eyebrow: 'Recurso vital',
    title: 'Água',
    image: '/images/agua.png',
    intro:
      'A água doce disponível para consumo é uma fração mínima de toda a água do planeta. Usar com consciência é garantir vida hoje e no futuro.',
    points: [
      'Apenas 2,5% da água da Terra é doce e a maior parte está em geleiras.',
      'O Brasil concentra cerca de 12% da água doce superficial do mundo.',
      'Uma torneira pingando pode desperdiçar mais de 40 litros por dia.',
    ],
    chartType: 'donut',
    chartTitle: 'Distribuição da água no planeta',
    chartUnit: '%',
    chartData: [
      { label: 'Água salgada', value: 97.5 },
      { label: 'Geleiras', value: 1.75 },
      { label: 'Água doce acessível', value: 0.75 },
    ],
    chartNote: 'Fonte: estimativas baseadas em dados da ONU-Água.',
  },
  {
    id: 'florestas',
    eyebrow: 'Pulmões do mundo',
    title: 'Florestas',
    image: '/images/florestas.png',
    intro:
      'As florestas abrigam a maior parte da biodiversidade terrestre, regulam o clima e produzem parte do ar que respiramos.',
    points: [
      'As florestas cobrem cerca de 31% da superfície terrestre do planeta.',
      'A Amazônia influencia o regime de chuvas de todo o continente.',
      'Reflorestar é uma das formas mais eficazes de capturar carbono.',
    ],
    chartType: 'bar',
    chartTitle: 'Cobertura florestal por bioma (aprox.)',
    chartUnit: 'milhões de km²',
    chartData: [
      { label: 'Amazônia', value: 4.2 },
      { label: 'Cerrado', value: 2.0 },
      { label: 'Mata Atlântica', value: 1.1 },
      { label: 'Caatinga', value: 0.8 },
    ],
    chartNote: 'Valores aproximados de área original dos biomas brasileiros.',
  },
  {
    id: 'reciclagem',
    eyebrow: 'Menos lixo, mais recurso',
    title: 'Reciclagem',
    image: '/images/reciclagem.png',
    intro:
      'Reciclar reduz a extração de matéria-prima, economiza energia e diminui a quantidade de resíduos que vão para aterros e oceanos.',
    points: [
      'O vidro e o alumínio podem ser reciclados infinitas vezes.',
      'Reciclar uma lata de alumínio economiza energia para horas de TV.',
      'Separar o lixo em casa é o primeiro passo da economia circular.',
    ],
    chartType: 'donut',
    chartTitle: 'Tempo de decomposição na natureza',
    chartUnit: 'anos',
    chartData: [
      { label: 'Papel', value: 3 },
      { label: 'Plástico', value: 400 },
      { label: 'Vidro', value: 4000 },
      { label: 'Alumínio', value: 200 },
    ],
    chartNote: 'Estimativas médias de decomposição de materiais comuns.',
  },
  {
    id: 'clima',
    eyebrow: 'O desafio do século',
    title: 'Mudanças Climáticas',
    image: '/images/clima.png',
    intro:
      'O aumento dos gases de efeito estufa eleva a temperatura média do planeta, intensificando secas, enchentes e eventos extremos.',
    points: [
      'A temperatura média global já subiu mais de 1 °C desde a era pré-industrial.',
      'Queima de combustíveis fósseis é a principal fonte de emissões.',
      'Energias renováveis são essenciais para frear o aquecimento.',
    ],
    chartType: 'line',
    chartTitle: 'Anomalia de temperatura global (ilustrativo)',
    chartUnit: '°C acima da média',
    chartData: [
      { label: '1900', value: -0.1 },
      { label: '1950', value: 0.0 },
      { label: '1980', value: 0.3 },
      { label: '2000', value: 0.6 },
      { label: '2020', value: 1.1 },
    ],
    chartNote: 'Tendência ilustrativa baseada em séries históricas climáticas.',
  },
  {
    id: 'sustentabilidade',
    eyebrow: 'Equilíbrio para o futuro',
    title: 'Sustentabilidade',
    image: '/images/sustentabilidade.png',
    intro:
      'Sustentabilidade é atender às necessidades do presente sem comprometer os recursos das futuras gerações — no consumo, na energia e no dia a dia.',
    points: [
      'Une aspectos ambientais, sociais e econômicos.',
      'Consumo consciente reduz desperdício e emissões.',
      'Pequenas atitudes somadas geram grande impacto coletivo.',
    ],
    chartType: 'bar',
    chartTitle: 'Matriz elétrica renovável (aprox.)',
    chartUnit: '%',
    chartData: [
      { label: 'Hidrelétrica', value: 56 },
      { label: 'Eólica', value: 12 },
      { label: 'Biomassa', value: 8 },
      { label: 'Solar', value: 5 },
    ],
    chartNote: 'Participação aproximada de fontes renováveis no Brasil.',
  },
]

export type SustainableAction = {
  icon: string
  title: string
  description: string
}

export const sustainableActions: SustainableAction[] = [
  { icon: 'droplet', title: 'Feche a torneira', description: 'Ao escovar os dentes ou ensaboar a louça, economize litros de água por dia.' },
  { icon: 'recycle', title: 'Separe o lixo', description: 'Divida recicláveis e orgânicos para facilitar a coleta seletiva.' },
  { icon: 'lightbulb', title: 'Economize energia', description: 'Apague luzes e prefira lâmpadas de LED e aparelhos eficientes.' },
  { icon: 'shopping-bag', title: 'Leve sua sacola', description: 'Use sacolas retornáveis e evite plásticos de uso único.' },
  { icon: 'bike', title: 'Mobilidade limpa', description: 'Caminhe, pedale ou use transporte coletivo sempre que possível.' },
  { icon: 'sprout', title: 'Plante e cultive', description: 'Uma horta ou uma árvore ajudam a purificar o ar e o solo.' },
  { icon: 'utensils', title: 'Evite desperdício', description: 'Planeje refeições e aproveite integralmente os alimentos.' },
  { icon: 'shirt', title: 'Consumo consciente', description: 'Reutilize, conserte e doe antes de comprar algo novo.' },
]

export type Curiosity = {
  question: string
  answer: string
}

export const curiosities: Curiosity[] = [
  {
    question: 'Uma única árvore pode absorver quanto CO₂?',
    answer: 'Uma árvore adulta pode absorver cerca de 20 kg de CO₂ por ano, além de liberar oxigênio e resfriar o ambiente ao redor.',
  },
  {
    question: 'Quanto tempo o plástico leva para se decompor?',
    answer: 'Uma garrafa PET pode levar mais de 400 anos para se decompor na natureza, por isso a reciclagem é tão importante.',
  },
  {
    question: 'A Amazônia produz sua própria chuva?',
    answer: 'Sim! As árvores liberam vapor d\u2019água que forma os "rios voadores", massas de umidade que levam chuva para várias regiões da América do Sul.',
  },
  {
    question: 'Quanta água usamos em um banho?',
    answer: 'Um banho de 15 minutos pode gastar mais de 130 litros de água. Reduzir o tempo faz uma grande diferença no consumo mensal.',
  },
  {
    question: 'O que é economia circular?',
    answer: 'É um modelo em que produtos e materiais são reutilizados, reparados e reciclados o máximo possível, reduzindo o desperdício a quase zero.',
  },
  {
    question: 'Qual bioma é o mais ameaçado do Brasil?',
    answer: 'A Mata Atlântica restou com cerca de 12% de sua cobertura original, sendo um dos ecossistemas mais ameaçados e biodiversos do mundo.',
  },
]

export type NewsItem = {
  category: string
  date: string
  title: string
  summary: string
}

export const news: NewsItem[] = [
  {
    category: 'Florestas',
    date: '18 set 2026',
    title: 'Projetos de reflorestamento ganham força no Brasil',
    summary: 'Iniciativas comunitárias e empresariais plantam milhões de mudas nativas para recuperar áreas degradadas e nascentes.',
  },
  {
    category: 'Energia',
    date: '12 set 2026',
    title: 'Energia solar cresce em residências brasileiras',
    summary: 'A geração distribuída avança e famílias reduzem a conta de luz enquanto diminuem as emissões de carbono.',
  },
  {
    category: 'Água',
    date: '05 set 2026',
    title: 'Cidades investem em reúso de água da chuva',
    summary: 'Sistemas de captação ajudam a enfrentar períodos de estiagem e aliviam a pressão sobre os reservatórios.',
  },
  {
    category: 'Clima',
    date: '28 ago 2026',
    title: 'Jovens lideram mobilizações por ação climática',
    summary: 'Movimentos estudantis cobram metas mais ambiciosas de redução de emissões e educação ambiental nas escolas.',
  },
  {
    category: 'Oceanos',
    date: '20 ago 2026',
    title: 'Mutirões retiram toneladas de plástico das praias',
    summary: 'Voluntários se organizam em limpezas costeiras e ações de conscientização sobre o descarte de resíduos.',
  },
  {
    category: 'Biodiversidade',
    date: '10 ago 2026',
    title: 'Novas áreas protegidas são criadas no Cerrado',
    summary: 'Unidades de conservação ampliam a proteção de nascentes e espécies ameaçadas do berço das águas do Brasil.',
  },
]
