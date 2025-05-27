import { Roboto } from 'next/font/google'

/**
 * Roboto font configuration using `next/font`.
 *
 * Provides the CSS variable `--font-roboto` and supports font weights 400, 500, and 700.
 *
 * @module fonts
 */
export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
  display: 'swap',
})
