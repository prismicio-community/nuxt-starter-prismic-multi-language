export const useNavigation = () => {
  const { locale } = useI18n()
  const { client } = usePrismic()
  return useAsyncData(
    '$navigation',
    () => client.getSingle('navigation', { lang: locale.value }),
    { watch: [locale]}
  ).data
}