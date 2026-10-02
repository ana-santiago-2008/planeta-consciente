export type BiomeKey =
  | 'amazonia'
  | 'cerrado'
  | 'caatinga'
  | 'mataAtlantica'
  | 'pantanal'
  | 'pampa'

export type Biome = {
  key: BiomeKey
  name: string
  color: string
  tagline: string
  description: string
  desmatamento: string
  recursosHidricos: string
  areasProtegidas: string
  vegetacaoRemanescente: number
}

export const biomes: Record<BiomeKey, Biome> = {
  amazonia: {
    key: 'amazonia',
    name: 'Amazônia',
    color: '#1f9d63',
    tagline: 'A maior floresta tropical do mundo',
    description:
      'Abriga a maior biodiversidade do planeta e uma imensa rede de rios que regula o clima da América do Sul.',
    desmatamento:
      'Sofre pressão do desmatamento por pecuária, garimpo e queimadas, com alertas monitorados por satélite.',
    recursosHidricos:
      'Concentra a maior bacia hidrográfica do mundo, o Rio Amazonas, e os "rios voadores" de umidade.',
    areasProtegidas:
      'Possui grandes unidades de conservação e terras indígenas, essenciais para conter a devastação.',
    vegetacaoRemanescente: 82,
  },
  cerrado: {
    key: 'cerrado',
    name: 'Cerrado',
    color: '#c9a227',
    tagline: 'O berço das águas do Brasil',
    description:
      'Savana mais biodiversa do mundo, onde nascem importantes bacias hidrográficas do país.',
    desmatamento:
      'É o bioma que mais perde vegetação nativa devido à expansão agrícola, sobretudo de grãos.',
    recursosHidricos:
      'Abastece as bacias do Araguaia-Tocantins, São Francisco e Paraná — daí o apelido de "caixa d\u2019água".',
    areasProtegidas:
      'Conta com parques nacionais como a Chapada dos Veadeiros, mas ainda tem baixa proporção protegida.',
    vegetacaoRemanescente: 50,
  },
  caatinga: {
    key: 'caatinga',
    name: 'Caatinga',
    color: '#d98a4b',
    tagline: 'O único bioma exclusivamente brasileiro',
    description:
      'Ecossistema semiárido adaptado à seca, com espécies que existem apenas nessa região do mundo.',
    desmatamento:
      'A retirada de lenha, o superpastoreio e a desertificação ameaçam sua vegetação nativa.',
    recursosHidricos:
      'Marcada por rios intermitentes e pela transposição do Rio São Francisco para o abastecimento.',
    areasProtegidas:
      'Tem baixa cobertura de unidades de conservação, exigindo esforços de recuperação e manejo.',
    vegetacaoRemanescente: 46,
  },
  mataAtlantica: {
    key: 'mataAtlantica',
    name: 'Mata Atlântica',
    color: '#2f8f4e',
    tagline: 'Biodiversidade onde vive a maioria dos brasileiros',
    description:
      'Floresta que se estende pelo litoral, com altíssima biodiversidade e muitas espécies endêmicas.',
    desmatamento:
      'Restam cerca de 12% da cobertura original, resultado de séculos de ocupação urbana e agrícola.',
    recursosHidricos:
      'Protege nascentes e mananciais que abastecem grandes cidades como São Paulo e Rio de Janeiro.',
    areasProtegidas:
      'Concentra reservas da biosfera e parques, com projetos ativos de restauração florestal.',
    vegetacaoRemanescente: 12,
  },
  pantanal: {
    key: 'pantanal',
    name: 'Pantanal',
    color: '#3aa6b9',
    tagline: 'A maior planície alagável do planeta',
    description:
      'Berço de rica fauna, com ciclos de cheia e seca que sustentam aves, peixes e grandes mamíferos.',
    desmatamento:
      'Sofre com queimadas severas em anos de seca e com o avanço de atividades no seu entorno.',
    recursosHidricos:
      'Depende das águas do planalto do Cerrado, que alimentam o pulsar de cheias e vazantes.',
    areasProtegidas:
      'Tem áreas protegidas e reservas privadas, além de ser Patrimônio Natural da Humanidade.',
    vegetacaoRemanescente: 83,
  },
  pampa: {
    key: 'pampa',
    name: 'Pampa',
    color: '#7bb661',
    tagline: 'Campos naturais do extremo sul',
    description:
      'Formado por campos e vegetação rasteira, com biodiversidade única de gramíneas e aves campestres.',
    desmatamento:
      'A conversão em lavouras e a monocultura de árvores exóticas reduzem os campos nativos.',
    recursosHidricos:
      'Abriga o Aquífero Guarani, um dos maiores reservatórios de água subterrânea do mundo.',
    areasProtegidas:
      'É um dos biomas com menor percentual de áreas protegidas no território nacional.',
    vegetacaoRemanescente: 36,
  },
}

// Bioma predominante por estado (sigla) para colorir o mapa
export const stateBiome: Record<string, BiomeKey> = {
  AC: 'amazonia',
  AM: 'amazonia',
  AP: 'amazonia',
  PA: 'amazonia',
  RO: 'amazonia',
  RR: 'amazonia',
  TO: 'cerrado',
  MA: 'cerrado',
  PI: 'caatinga',
  CE: 'caatinga',
  RN: 'caatinga',
  PB: 'caatinga',
  PE: 'caatinga',
  AL: 'caatinga',
  SE: 'caatinga',
  BA: 'caatinga',
  MT: 'cerrado',
  MS: 'pantanal',
  GO: 'cerrado',
  DF: 'cerrado',
  MG: 'cerrado',
  SP: 'mataAtlantica',
  RJ: 'mataAtlantica',
  ES: 'mataAtlantica',
  PR: 'mataAtlantica',
  SC: 'mataAtlantica',
  RS: 'pampa',
}

export const stateNames: Record<string, string> = {
  AC: 'Acre', AL: 'Alagoas', AM: 'Amazonas', AP: 'Amapá', BA: 'Bahia',
  CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás',
  MA: 'Maranhão', MG: 'Minas Gerais', MS: 'Mato Grosso do Sul', MT: 'Mato Grosso',
  PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco', PI: 'Piauí', PR: 'Paraná',
  RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RO: 'Rondônia', RR: 'Roraima',
  RS: 'Rio Grande do Sul', SC: 'Santa Catarina', SE: 'Sergipe', SP: 'São Paulo',
  TO: 'Tocantins',
}
