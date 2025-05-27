/**
 * Represents an error returned by the backend API.
 *
 * Matches the error format returned by Express + `ApiError` in the backend.
 *
 * @example
 * throw new ApiError('Game not found', 404, { id: 123 })
 *
 * @module errors
 */
export class ApiError extends Error {
  status: number
  details?: unknown

  constructor(message: string, status: number, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}
