import libraryThemeProvider0 from '@embeddable.com/vanilla-components/dist/embeddable-theme-9d0f7.js'
import localThemeProvider from '/Users/christophercarlson/fluid/droplet-embeddable/app/frontend/embeddable/embeddable.theme.ts';

import { defineTheme } from '@embeddable.com/core';

const parentProviders = [
  libraryThemeProvider0
];

export default function combinedThemeProvider(clientContext) {
  let parentTheme = {};

  // 1. Sequentially call each library's theme, merging the result
  for (const provider of parentProviders) {
    if (typeof provider === 'function') {
      const partial = provider(clientContext, parentTheme);

      // Merge into parentTheme
      parentTheme = defineTheme(parentTheme, partial);
    }
  }

  if (typeof localThemeProvider === 'function') {
    return localThemeProvider(clientContext, parentTheme);
  }

  return parentTheme;
}