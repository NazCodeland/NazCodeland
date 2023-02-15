export function prefersColorSchemeLight() {
  return matchMedia('(prefers-color-scheme: light)').matches ? 1 : 0;
}
export function prefersColorSchemeDark() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 1 : 0;
}
