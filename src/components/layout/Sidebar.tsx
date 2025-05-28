import { Home, Gamepad2, User } from 'lucide-react'
import Link from 'next/link'

export const Sidebar = () => (
  <aside className="w-64 shrink-0 border-r border-border p-4 hidden md:block">
    <nav className="space-y-4">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:underline">
        <Home className="w-5 h-5" /> Inicio
      </Link>
      <Link href="/games" className="flex items-center gap-2 text-lg font-semibold hover:underline">
        <Gamepad2 className="w-5 h-5" /> Link
      </Link>
      <Link href="/profile" className="flex items-center gap-2 text-lg font-semibold hover:underline">
        <User className="w-5 h-5" /> Link
      </Link>
    </nav>
  </aside>
)
