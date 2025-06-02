import { APP as coreApp } from '@trackplay/core/constants'

/**
 * General configuration constants for the application.
 *
 * @module constant
 */
export const APP = {
  ...coreApp,
  NAME: 'TrackPlay',
  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'] as const,
  APP_BASE_URL: 'https://trackplay.localhost',
  API_BASE_URL: 'https://api.trackplay.localhost',
}
