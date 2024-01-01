import { CONFIG } from './config'

export const WORDS = [
  'darrer',
  'mestén',
  'amiça',
  'acler',
  'afora',
  'aguia',
  'aivel',
  'ambit',
  'amont',
  'anait',
  'ancar',
  'ancut',
  'apart',
  'angel',
  'apraç',
  'apres',
  'asurd',
  'astiu',
  'axeda',
  'blava',
  'beita',
  'polena',
  'betir',
  'barre',
  'bojxa',
  'bomba',
  'baxar',
  'borre',
  'bresa',
  'bureu',
  'bürla',
  'cança',
  'carça',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
