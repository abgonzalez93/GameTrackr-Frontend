import { Button } from '@components/index'
import { User } from 'lucide-react'

export const UserMenu = () => {
  return (
    <Button variant="ghost" size="icon">
      <User className="w-5 h-5" />
    </Button>
  )
}
