import { env as coreEnv } from '@trackplay/core/config'

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
  ...coreEnv,
  APP_BASE_URL: process.env.APP_BASE_URL || 'http://localhost:3000',
  API_SERVER_BASE_URL: process.env.API_SERVER_BASE_URL || 'http://trackplay-backend:4000',
  API_CLIENT_BASE_URL: process.env.API_CLIENT_BASE_URL || 'https://api.trackplay.localhost',
}
