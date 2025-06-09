import { getClientEnvConfig, getServerEnvConfig } from '@config/index'

/**
 * Returns the appropriate API base URL depending on the runtime environment.
 *
 * - On the server side (SSR, API routes, server actions), it returns the internal base URL
 *   (`INTERNAL_API_URL`) for direct internal HTTP requests.
 * - On the client side (browser), it returns the public base URL (`NEXT_PUBLIC_API_URL`)
 *   routed through the reverse proxy over HTTPS.
 *
 * @returns {string} The correct base URL to use in API fetch requests.
 *
 * @example
 * const url = getApiBaseUrl();
 * const res = await fetch(`${url}/games`);
 */
export const getApiBaseUrl = (): string => {
  return typeof window === 'undefined' ? getServerEnvConfig.INTERNAL_API_URL : getClientEnvConfig.NEXT_PUBLIC_API_URL
}
