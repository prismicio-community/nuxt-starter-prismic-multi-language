export const useSettings = () => {
  const { locale } = useI18n()
  const { client } = usePrismic()
  return useAsyncData(
    '$settings',
    () => client.getSingle('settings', { lang: locale.value}),
    { watch: [locale]}
  ).data
}