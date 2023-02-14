export function prefersContrastLess() {
  return matchMedia('(prefers-contrast: less)').matches ? 1 : 0;
}

export function prefersContrastMore() {
  return matchMedia('(prefers-contrast: more)').matches ? 1 : 0;
}
