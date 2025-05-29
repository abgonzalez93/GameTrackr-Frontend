import { IGDBGame, IGDBGameFilters } from '@trackplay/core/schemas'
import { fetchFromApi } from '@utils/index'

/**
 * API client for interacting with the backend /games endpoints.
 *
 * This module handles game-related API operations, including:
 * - Searching games with filters
 * - Fetching game details by IGDB ID
 *
 * @module services/api
 */
export const games = {
  /**
   * Search games using full-text query and optional filters.
   *
   * Calls the backend endpoint: `GET /games/search`
   *
   * @example
   * const results = await games.search({ q: 'zelda', limit: 10 })
   *
   * @param filters - Filtering, sorting and pagination options
   * @returns A promise that resolves to a list of matching IGDB games
   */
  async search(filters: Partial<IGDBGameFilters> = {}): Promise<IGDBGame[]> {
    return fetchFromApi.get<IGDBGame[]>('/games/search', { filters })
  },

  /**
   * Fetch a single game by its IGDB ID.
   *
   * Calls the backend endpoint: `GET /games/:id`
   *
   * @example
   * const game = await games.getById(12345)
   *
   * @param id - The IGDB game ID
   * @returns A promise that resolves to the game data, or null if not found
   */
  async getById(id: number): Promise<IGDBGame | null> {
    return fetchFromApi.get<IGDBGame>(`/games/${id}`)
  },
}
