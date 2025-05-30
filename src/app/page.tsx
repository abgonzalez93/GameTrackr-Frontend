import { GameGrid } from '@components/index'

const HomePage = () => {
  return (
    <div className="space-y-4">
      <GameGrid filters={{ limit: 12 }} />
    </div>
  )
}

export default HomePage
