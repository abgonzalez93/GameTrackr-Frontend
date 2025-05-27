import { Metadata } from 'next'

/**
 * Base metadata for the application.
 *
 * @module metadata
 */
export const metadata: Metadata = {
  title: 'GameTrackr',
  description: 'Trackea y organiza tus videojuegos favoritos.',
  keywords: ['videojuegos', 'tracking', 'biblioteca'],
  authors: [{ name: 'GameTrackr Team' }],
  creator: 'GameTrackr',
  metadataBase: new URL('https://gametrackr.es'),
  openGraph: {
    title: 'GameTrackr',
    description: 'Trackea y organiza tus videojuegos favoritos.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://gametrackr.es',
    siteName: 'GameTrackr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameTrackr',
    description: 'Trackea y organiza tus videojuegos favoritos.',
  },
}
