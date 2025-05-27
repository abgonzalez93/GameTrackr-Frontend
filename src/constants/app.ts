/**
 * General configuration constants for the application.
 *
 * @module constant
 */
export const APP = {
  NAME: 'GameTrackr',

  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'] as const,

  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

  APP_BASE_URL: process.env.APP_BASE_URL || 'https://gametrackr.com',
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:4000',
}
