export const useSettings = () => {
  const { locale } = useI18n()
  const prismic = usePrismic()
  return useAsyncData(
    '$settings',
    () => prismic.client.getSingle('settings', { lang: locale.value}),
    { watch: [locale]}
  ).data
}