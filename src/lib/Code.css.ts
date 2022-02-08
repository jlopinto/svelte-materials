import { globalStyle } from '@vanilla-extract/css';
import { vars } from '$lib/styles/vars.css';

globalStyle('.token.tag, .token.punctuation', {
  color: vars.colors.active200
});

globalStyle('.token.attr-value', {
  color: vars.colors.active200
});

globalStyle('.token.attr-name', {
  color: vars.colors.blue200
});

// globalStyle('.token.attr-value', {
//   color: vars.colors.light200
// });
