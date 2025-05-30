import { APP as coreApp } from '@trackplay/core/constants'
import { env } from '@config/index'

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
  APP_BASE_URL: env.APP_BASE_URL,
  API_BASE_URL: env.API_BASE_URL,
}
