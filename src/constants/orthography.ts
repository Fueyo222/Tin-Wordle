import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'à',
  'b',
  'c',
  'ç',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'ü',
  'v',
  'w',
  'x',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
