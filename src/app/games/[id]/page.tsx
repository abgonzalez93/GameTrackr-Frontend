import { notFound } from 'next/navigation'
import { games } from '@services/index'

type GamePageProps = {
  params: { id: string }
}

const GamePage = async ({ params }: GamePageProps) => {
  const { id } = await params
  const game = await games.getById(Number(id))
  if (!game) return notFound()

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{game.name}</h1>
      <p className="text-muted-foreground">{game.slug}</p>
      {/* Más detalles luego: fecha, plataformas, rating, etc. */}
    </div>
  )
}

export default GamePage
