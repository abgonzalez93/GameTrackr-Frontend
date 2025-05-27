import { ApiErrorResponseSchema } from '@schemas/index'
import { APP_CONFIG } from '@constants/index'
import { ApiError } from '@errors/index'

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type FetchParams = {
  headers?: Record<string, string>
  body?: BodyInit | null
  cache?: RequestCache
  next?: NextFetchRequestConfig
}

/**
 * Sends an HTTP request using the Fetch API with predefined configuration.
 *
 * @param method - HTTP method (GET, POST, etc.)
 * @param endpoint - Relative API endpoint (e.g., "/games")
 * @param options - Optional fetch configuration
 * @returns The raw Response object
 */
const performRequest = (
  method: Method,
  endpoint: string,
  options: FetchParams = {},
): Promise<Response> => {
  return fetch(`${APP_CONFIG.API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ?? null,
    cache: options.cache ?? 'no-store',
    next: options.next,
  })
}

/**
 * Parses the response body from the API as either JSON or plain text.
 *
 * @param res - The Response object
 * @returns Parsed body as `unknown`
 */
const parseResponseBody = async (res: Response): Promise<unknown> => {
  try {
    return await res.json()
  } catch {
    return await res.text()
  }
}

/**
 * Handles failed HTTP responses by parsing and validating error content.
 *
 * @param res - The Response object
 * @param parsed - The already parsed body
 * @throws ApiError - If the response represents an API error
 */
const handleErrorResponse = (res: Response, parsed: unknown): never => {
  const result = ApiErrorResponseSchema.safeParse(parsed)

  if (result.success) {
    throw new ApiError(result.data.error, res.status, result.data.details)
  }

  const fallbackMessage =
    typeof parsed === 'object' && parsed !== null && 'error' in parsed
      ? String((parsed as { error: unknown }).error)
      : `[${res.status}] ${res.statusText}`

  throw new ApiError(fallbackMessage, res.status, parsed)
}

/**
 * Makes an HTTP request to the external API using the specified method.
 *
 * @template T - The expected response type.
 * @param method - HTTP method (GET, POST, etc.)
 * @param endpoint - Relative path to the API endpoint (e.g., "/games")
 * @param options - Optional fetch configuration (headers, body, etc.)
 * @returns A promise resolving to the parsed JSON response as type T
 * @throws ApiError if the request fails or the response is not OK
 */
const request = async <T>(
  method: Method,
  endpoint: string,
  options: FetchParams = {},
): Promise<T> => {
  const res = await performRequest(method, endpoint, options)
  const parsed = await parseResponseBody(res)

  if (!res.ok) handleErrorResponse(res, parsed)

  return parsed as T
}

/**
 * Typed API client for external HTTP requests.
 * Provides method shortcuts with consistent base URL and error handling.
 */
export const fetchFromApi = {
  get: <T>(endpoint: string, options?: FetchParams) =>
    request<T>('GET', endpoint, options),

  post: <T>(endpoint: string, options?: FetchParams) =>
    request<T>('POST', endpoint, options),

  put: <T>(endpoint: string, options?: FetchParams) =>
    request<T>('PUT', endpoint, options),

  patch: <T>(endpoint: string, options?: FetchParams) =>
    request<T>('PATCH', endpoint, options),

  delete: <T = void>(endpoint: string, options?: FetchParams) =>
    request<T>('DELETE', endpoint, options),
}
