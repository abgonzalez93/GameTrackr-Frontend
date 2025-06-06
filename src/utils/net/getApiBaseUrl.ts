import { getConf } from '@config/index'

/**
 * Returns the appropriate API base URL depending on the runtime environment.
 *
 * - On the server side (SSR, API routes, server actions): returns internal API URL (no proxy, HTTP)
 * - On the client side (browser): returns public API URL (via reverse proxy, HTTPS)
 *
 * @returns {string} The correct base URL for API requests.
 *
 * @example
 * const baseUrl = getApiBaseUrl()
 * const res = await fetch(`${baseUrl}/games`)
 */
export const getApiBaseUrl = (): string => {
  const { INTERNAL_API_URL, PUBLIC_API_URL } = getConf()
  const isServer = typeof window === 'undefined'
  return isServer ? INTERNAL_API_URL : PUBLIC_API_URL
}
