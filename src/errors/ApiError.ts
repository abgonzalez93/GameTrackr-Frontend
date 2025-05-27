/**
 * Represents an error returned by the backend API.
 *
 * @class
 * @extends Error
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
