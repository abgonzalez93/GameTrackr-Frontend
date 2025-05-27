import { IGDBGame, IGDBGameFilters } from 'schemas/index'
import { fetchFromApi } from 'utils/index'

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
    return fetchFromApi.get<IGDBGame[]>('/games', { filters })
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
