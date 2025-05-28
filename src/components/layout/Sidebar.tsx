import { Home, Folder } from 'lucide-react'
import Link from 'next/link'

export const Sidebar = () => (
  <aside className="w-64 shrink-0 border-r border-border p-4 hidden md:block">
    <nav className="space-y-4">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <Home className="w-5 h-5" /> Inicio
      </Link>
      <Link href="" className="flex items-center gap-2 text-lg font-semibold">
        <Folder className="w-5 h-5" /> Link
      </Link>
      <Link href="" className="flex items-center gap-2 text-lg font-semibold">
        <Folder className="w-5 h-5" /> Link
      </Link>
    </nav>
  </aside>
)
