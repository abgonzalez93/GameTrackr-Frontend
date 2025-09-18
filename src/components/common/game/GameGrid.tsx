import { GameFilters } from '@trackplay/core/schemas'
import { GameCard } from '@components/index'
import { games } from '@apis/index'

type GameGridProps = {
  filters?: GameFilters
}

export const GameGrid = async ({ filters = {} }: GameGridProps) => {
  const results = await games.search(filters)

  if (!results.length) {
    return (
      <p className="text-muted-foreground text-center text-sm">No se encontraron juegos para los filtros seleccionados.</p>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {results.map((game) => (
        <GameCard key={game.igdb_id} game={game} />
      ))}
    </div>
  )
}
