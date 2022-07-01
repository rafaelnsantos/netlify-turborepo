export const SALE_URL =
  process.env.NEXT_PUBLIC_SALE_URL ?? "//teste-docs.netlify.app"

export const NODES = (
  process.env.NEXT_PUBLIC_KINDELIA_DEFAULT_NODES ||
  "143.244.179.61,164.92.214.78,159.223.39.129"
).split(",")
