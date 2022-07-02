export const SALE_URL =
  process.env.NEXT_PUBLIC_SALE_URL ?? "//sale-test.netlify.app"

export const NODES = (
  process.env.NEXT_PUBLIC_KINDELIA_DEFAULT_NODES ||
  "143.244.179.61,164.92.214.78,159.223.39.129"
).split(",")

export const MAILCHIMP_URL =
  process.env.MAILCHIMP_URL ||
  "https://gmail.us11.list-manage.com/subscribe/post-json?u=7c7de65b629bc1f7543b70d8e&id=911858645e"
