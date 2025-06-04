/**
 * General configuration constants for the application.
 *
 * @module constant
 */
export const APP = {
  NAME: 'TrackPlay',
  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'] as const,
  APP_BASE_URL: 'http://localhost:3000',
  API_BASE_URL: 'http://trackplay-backend:80',
}
