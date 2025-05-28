'use client'

import { Button } from '@components/index'
import { User } from 'lucide-react'
import { cn } from '@utils/index'

export const Topbar = () => (
  <header className={cn('flex items-center justify-between w-full h-16 px-4 md:px-6 border-b border-border')}>
    <h1 className="text-lg font-semibold">APP</h1>

    <div className="flex items-center gap-2">
      {/* Aquí en el futuro se abrirá un menú con opciones como "Perfil", "Tema", "Salir", etc. */}
      <Button variant="ghost" size="icon">
        <User className="w-5 h-5" />
      </Button>
    </div>
  </header>
)
