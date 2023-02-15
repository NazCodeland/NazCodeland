export function prefersColorSchemeLight() {
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
export function prefersColorSchemeDark() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
