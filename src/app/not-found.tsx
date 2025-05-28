import { Button } from '@components/index'
import { Ghost } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center px-4 py-16">
      <Ghost className="w-16 h-16 text-muted-foreground mb-6" />
      <h1 className="text-3xl font-bold tracking-tight">Página no encontrada</h1>
      <p className="text-muted-foreground mt-2 mb-6">Lo sentimos, no hemos podido encontrar la página que buscas.</p>
      <Button asChild>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </section>
  )
}
