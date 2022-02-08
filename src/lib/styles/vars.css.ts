import { modularScale } from 'polished';
import { darken, lighten } from 'polished';
import { generatePalette } from '$lib/utils.js';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);

const colors = [
  {
    name: 'active',
    color: '#892be2fa'
  },
  {
    name: 'blue',
    color: '#00a0e9'
  },
  {
    name: 'light',
    color: '#ddd'
  },
  {
    name: 'dark',
    color: '#333'
  }
];

const shadeVariations = [
  {
    name: '200',
    fn: lighten,
    value: 0.2
  },
  {
    name: '300',
    fn: lighten,
    value: 0.1
  },
  {
    name: '400',
    fn: lighten,
    value: 0
  },
  {
    name: '500',
    fn: darken,
    value: 0.1
  },
  {
    name: '600',
    fn: darken,
    value: 0.2
  }
];

export const vars = {
  spaces: {
    auto: 'auto',
    none: '0',
    '1': spaceScale(1),
    '2': spaceScale(2),
    '3': spaceScale(3),
    '4': spaceScale(4),
    '5': spaceScale(5),
    '6': spaceScale(6),
    '7': spaceScale(7),
    '8': spaceScale(8)
  },
  colors: generatePalette(colors, shadeVariations),
  borders: {
    none: '0',
    default: '1px',
    wide: '2px'
  },
  orders: {
    first: -9999,
    last: 9999,
    none: 0
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none'
  },
  stack: {
    0: '0',
    1: spaceScale(2),
    2: spaceScale(4),
    3: spaceScale(6),
    4: spaceScale(8)
  },
  rounded: {
    xs: '0.313rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  },
  fonts: {
    fontFamilyBody: 'Bitter, sans-serif',
    fontFamilyTitle: 'Bitter, sans-serif'
  },
  fontSizes: {
    fontSize0: modularScale(0, '14px'),
    fontSize1: modularScale(1, '14px'),
    fontSize2: modularScale(2, '14px'),
    fontSize3: modularScale(3, '14px'),
    fontSize4: modularScale(4, '14px'),
    fontSize5: modularScale(5, '14px')
  },
  widths: {
    full: '100%'
  },
  gridColsTemplate: {
    auto: 'auto',
    fit: 'repeat(auto-fit, minmax(0, 1fr))',
    fill: 'repeat(auto-fill, minmax(0, 1fr))',
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))'
  },
  gridColSpan: {
    auto: 'auto',
    1: 'span 1/span 1',
    2: 'span 2/span 2',
    3: 'span 3/span 3',
    4: 'span 4/span 4',
    5: 'span 5/span 5',
    6: 'span 6/span 6',
    7: 'span 7/span 7',
    8: 'span 8/span 8',
    9: 'span 9/span 9',
    10: 'span 10/span 10',
    11: 'span 11/span 11',
    12: 'span 12/span 12'
  },
  gridAuto: {
    auto: 'auto',
    1: '1fr'
  }
};
