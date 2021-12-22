/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      apiPath: 'https://localhost:8000/api'
    }
  }
  return {
    reactStrictMode: true,
    apiPath: 'https://espasyo-api.matteusan.me/api'
  }
}
