import es from '@locales/es/translation.json'
import en from '@locales/en/translation.json'
import i18next from 'i18next'

/**
 * Initializes the i18next internationalization instance with in-memory translation resources.
 *
 * This configuration sets:
 * - Default language: Spanish (`es`)
 * - Fallback language: English (`en`)
 * - Translation namespaces: uses the default `translation` key
 * - Interpolation settings: disables HTML escaping
 */
export default i18next.init({
  lng: 'es',
  fallbackLng: 'en',
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
})
