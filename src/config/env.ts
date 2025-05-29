import { EnvError } from '@errors/index'

/**
 * Environment configuration loader.
 * Loads required environment variables and provides fallbacks for development.
 *
 * @module utils/env
 */
const required = (name: string): string => {
  const value = process.env[name]
  if (!value) throw new EnvError(name)
  return value
}

/**
 * Environment configuration.
 *
 * Centralized access to all environment variables used in the application,
 * including runtime flags and required external service credentials.
 *
 * Each variable is either loaded directly from `process.env`, has a default fallback,
 * or is enforced as required using the `required` function.
 *
 * @module config/env
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

  APP_BASE_URL: process.env.APP_BASE_URL || 'http://localhost:3000',
  API_SERVER_BASE_URL: process.env.API_SERVER_BASE_URL || 'http://trackplay-backend:4000',
  API_CLIENT_BASE_URL: process.env.API_CLIENT_BASE_URL || 'https://api.trackplay.localhost',
}
