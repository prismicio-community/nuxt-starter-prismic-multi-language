import { type Content } from '@prismicio/client'

export const useAlternateLanguages = () => {
  return useState<Content.AllDocumentTypes['alternate_languages']>(() => [])
}