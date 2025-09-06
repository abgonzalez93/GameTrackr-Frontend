import { Metadata } from 'next'

/**
 * Base metadata for the application.
 */
export const metadata: Metadata = {
  title: 'TrackPlay',
  description: 'Trackea y organiza tus videojuegos favoritos.',
  keywords: ['videojuegos', 'tracking', 'biblioteca'],
  authors: [{ name: 'TrackPlay Team' }],
  creator: 'TrackPlay',
  metadataBase: new URL('https://trackplay.es'),
  openGraph: {
    title: 'TrackPlay',
    description: 'Trackea y organiza tus videojuegos favoritos.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://trackplay.es',
    siteName: 'TrackPlay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrackPlay',
    description: 'Trackea y organiza tus videojuegos favoritos.',
  },
}
