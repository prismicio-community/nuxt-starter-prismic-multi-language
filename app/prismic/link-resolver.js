/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return `/${doc.lang}`
  }

  if (doc.type === 'page') {
    return `/${doc.lang}/${doc.uid}`
  }

  return '/not-found'
}