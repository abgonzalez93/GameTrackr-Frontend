import { required, getClientConf } from '@trackplay/core/config'

/**
 * Environment configuration.
 *
 * Centralized access to all environment variables used in the application,
 * including runtime flags and required external service credentials.
 *
 * Each variable is either loaded directly from `process.env`, has a default fallback,
 * or is enforced as required using the `required` function.
 *
 * @module config
 */
export const getConf = () => ({
  ...getClientConf(),
  INTERNAL_API_URL: required('INTERNAL_API_URL'),
  PUBLIC_API_URL: required('PUBLIC_API_URL'),
  PUBLIC_FRONTEND_URL: required('PUBLIC_FRONTEND_URL'),
})
