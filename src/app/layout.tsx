import { metadata as defaultMetadata } from '@metadata/index'
import { AppWrapper } from '@components/index'
import { APP } from '@constants/index'
import { roboto } from '@fonts/index'
import '@styles/globals.css'

export const metadata = defaultMetadata

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang={APP.DEFAULT_LANGUAGE}>
      <body className={roboto.variable} cz-shortcut-listen="true">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}

export default Layout
