/* eslint-disable import/extensions */
import getCurrentTheme from './getCurrentTheme.js';
import setTheme from './setTheme.js';
import isClrWhiteOrBlack from './isClrWhiteOrBlack.js';
import isForcedColorsActive from './isForcedColorsActive.js';
import { prefersContrastLess, prefersContrastMore } from './prefersContrast.js';

// prettier-ignore
import { prefersColorSchemeLight, prefersColorSchemeDark } from './prefersColorScheme.js';

export {
  getCurrentTheme,
  setTheme,
  isClrWhiteOrBlack,
  isForcedColorsActive,
  prefersContrastLess,
  prefersContrastMore,
  prefersColorSchemeLight,
  prefersColorSchemeDark,
};
