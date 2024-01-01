import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
