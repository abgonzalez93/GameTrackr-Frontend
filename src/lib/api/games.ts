import { buildQueryParams, fetchFromApi } from '@utils/index'
import { IGDBGame, IGDBGameFilters } from '@schemas/index'

/**
 * API client for interacting with the /games endpoint.
 *
 * @module api
 */
export const games = {
  /**
   * Fetch all games with optional filters.
   *
   * @param filters - Optional filters (search, genre, platform, etc.)
   * @returns List of games from the API.
   */
  async getAll(filters: Partial<IGDBGameFilters> = {}): Promise<IGDBGame[]> {
    const query = buildQueryParams(filters)
    return fetchFromApi.get<IGDBGame[]>(`/games${query}`)
  },

  /**
   * Fetch a single game by its ID.
   *
   * @param id - The game ID
   * @returns Game data or null if not found
   */
  async getById(id: number): Promise<IGDBGame | null> {
    return await fetchFromApi.get<IGDBGame>(`/games/${id}`)
  },
}
