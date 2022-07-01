const withTM = require("next-transpile-modules")(["ui", "api"])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
