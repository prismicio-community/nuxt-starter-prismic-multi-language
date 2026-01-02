export const useNavigation = () => {
  const { locale } = useI18n()
  const { client } = usePrismic()
  return useAsyncData(
    `$navigation-${locale.value}`,
    () => client.getSingle('navigation', { lang: locale.value }),
    { watch: [locale] }
  ).data
}