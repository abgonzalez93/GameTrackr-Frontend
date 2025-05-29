import { env } from '@config/index'

/**
 * General configuration constants for the application.
 *
 * @module constant
 */
export const APP = {
  NAME: 'GameTrackr',

  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'] as const,

  NODE_ENV: env.NODE_ENV,
  IS_PRODUCTION: env.IS_PRODUCTION,
  IS_DEVELOPMENT: env.IS_DEVELOPMENT,

  APP_BASE_URL: env.APP_BASE_URL,
  API_BASE_URL: typeof window === 'undefined' ? env.API_SERVER_BASE_URL : env.API_CLIENT_BASE_URL,

  MAX_GAME_LIMIT: 50,
}
