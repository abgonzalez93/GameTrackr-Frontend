'use client'

import { GameCard, Button, Input } from '@components/index'
import { IGDBGame } from '@trackplay/core/schemas'
import { games } from '@services/index'
import { Search } from 'lucide-react'
import { useState } from 'react'

export const Searchbar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<IGDBGame[] | null>(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    const data = await games.search({ q: query })
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
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  )
}
