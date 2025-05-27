/**
 * Converts a filters object into a query string.
 * Supports arrays, strings, numbers and booleans.
 *
 * @param filters - An object where each key is a query param
 * @returns A query string beginning with "?" or an empty string
 *
 * @module utils
 */
export const buildQueryParams = (
  filters: Record<string, unknown>,
): string => {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(filters)) {
    if (value === undefined || value === null || value === '') continue

    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v !== undefined && v !== null && v !== '') {
          params.append(key, String(v))
        }
      })
    } else {
      params.set(key, String(value))
    }
  }

  const query = params.toString()
  return query ? `?${query}` : ''
}
