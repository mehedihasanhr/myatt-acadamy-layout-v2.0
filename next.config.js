/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // Will only be available on the server side
    domain: process.env.DOMAIN
  },
  // images: {
  //   formats: ['image/webp'],
  // },
  env: {
    DEBUG: process.env.DEBUG || false,
  }
}

module.exports = nextConfig
