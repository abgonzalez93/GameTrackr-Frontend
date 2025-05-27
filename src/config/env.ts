/**
 * Environment configuration loader.
 * Loads required environment variables and provides fallbacks for development.
 *
 * @module config
 */
const required = (name: string): string => {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

/**
 * Environment configuration loader.
 * Loads required environment variables and provides fallbacks for development.
 *
 * @config
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

  APP_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://gametrackr.com',
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:4000',
}
