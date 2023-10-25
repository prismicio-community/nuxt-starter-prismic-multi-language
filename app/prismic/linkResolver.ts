import { type LinkResolverFunction } from '@prismicio/client';

const linkResolver: LinkResolverFunction = (doc) => {
  const prefix = doc.lang === 'en-us' ? '' : `/${doc.lang}`

  switch (doc.type) {
    case 'page':
      return doc.uid === 'home' ? prefix || '/' : `${prefix}/${doc.uid}`
    default:
      return prefix || '/'
  }
}

export default linkResolver