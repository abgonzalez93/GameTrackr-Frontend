import { metadata as defaultMetadata } from 'metadata/index'
import { APP } from '@constants/index'
import { roboto } from '@fonts/index'
import '@styles/globals.css'

export const metadata = defaultMetadata

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={APP.DEFAULT_LANGUAGE}>
      <body className={roboto.variable}>{children}</body>
    </html>
  )
}
