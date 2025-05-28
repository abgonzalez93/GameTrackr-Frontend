'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/index'
import { IGDBGame } from '@schemas/index'

type GameCardProps = {
  game: IGDBGame
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="cursor-pointer transition hover:shadow">
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>{game.slug}</CardDescription>
      </CardHeader>
      <CardContent />
    </Card>
  )
}
