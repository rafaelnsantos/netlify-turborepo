import { Option, Tagged } from "./enum"

export type Hex = Tagged<"Hex", string>
export type HashHex = Tagged<"Hash", string>

const HASH_HEX_LENGTH = 64 + 2 // '0x' + 64 hex chars

export function hex_str_from(_txt: string): Option<Hex> {
  let txt = _txt.toLowerCase()
  // ??
  if (!txt.startsWith("0x")) {
    return null
  }
  for (let i = 2; i < txt.length; i++) {
    let c = txt[i]
    if (!(c in HEX_DIGITS)) {
      return null
    }
  }
  return txt as Hex
}

export function hash_hex_from(txt: string): Option<HashHex> {
  let hex = hex_str_from(txt)
  if (hex == null) {
    return null
  }
  if (hex.length !== HASH_HEX_LENGTH) {
    return null
  }
  return txt as HashHex
}

const HEX_DIGITS = {
  "0": 0n,
  "1": 1n,
  "2": 2n,
  "3": 3n,
  "4": 4n,
  "5": 5n,
  "6": 6n,
  "7": 7n,
  "8": 8n,
  "9": 9n,
  a: 10n,
  b: 11n,
  c: 12n,
  d: 13n,
  e: 14n,
  f: 15n,
}
