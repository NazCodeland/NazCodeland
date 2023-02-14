/* eslint-disable import/prefer-default-export */
export default function isForcedColorsActive() {
  return matchMedia('(forced-colors:active)') ? 1 : 0;
}
