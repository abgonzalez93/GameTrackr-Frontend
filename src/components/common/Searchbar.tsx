'use client'

import { GameCard, Button, Input } from '@components/index'
import { GameList } from '@trackplay/core/schemas'
import { Search } from 'lucide-react'
import { games } from '@apis/index'
import { useState } from 'react'

export const Searchbar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<GameList | null>(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    const data = await games.search({ query })
    setResults(data)
  }

  return (
    <div className="space-y-4">
      <div className="flex w-full max-w-md gap-2">
        <Input
          type="text"
          placeholder="Buscar juegos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch}>
          <Search className="w-4 h-4 mr-1" />
          Buscar
        </Button>
      </div>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((game) => (
            <GameCard key={game.ids.igdb} game={game} />
          ))}
        </div>
      )}
    </div>
  )
}
