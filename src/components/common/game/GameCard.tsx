'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/index'
import { Game } from '@trackplay/core/schemas'

type GameCardProps = {
  game: Game
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="cursor-pointer transition hover:shadow">
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
        <CardDescription>{game.slug}</CardDescription>
      </CardHeader>
      <CardContent />
    </Card>
  )
}
