import { env } from 'config/index'

/**
 * General configuration constants for the application.
 *
 * @module constant
 */
export const APP_CONFIG = {
  NAME: 'GameTrackr',
  APP_BASE_URL: env.APP_BASE_URL,
  API_BASE_URL: env.API_BASE_URL,
  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'] as const,
}

/**
 * Pagination-related constants.
 *
 * @constant
 */
export const APP_PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
}

/**
 * Constants related to the IGDB (Internet Game Database) integration.
 *
 * @constant
 */
export const APP_IGDB = {
  IMAGE_URL: 'https://images.igdb.com/igdb/image/upload',
}
