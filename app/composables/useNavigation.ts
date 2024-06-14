export const useNavigation = () => {
  const { locale } = useI18n()
  const prismic = usePrismic()
  return useAsyncData(
    '$navigation',
    () => prismic.client.getSingle('navigation', { lang: locale.value}),
    { watch: [locale]}
  ).data
}