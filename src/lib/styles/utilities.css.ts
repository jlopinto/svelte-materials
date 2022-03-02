// import { style } from '@vanilla-extract/css';
// import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
// import { vars } from '$lib/styles/vars.css';

// const responsiveProperties = defineProperties({
//   conditions: {
//     mobile: {},
//     tablet: { '@media': 'screen and (min-width: 768px)' },
//     desktop: { '@media': 'screen and (min-width: 1024px)' }
//   },
//   defaultCondition: 'mobile',
//   responsiveArray: ['mobile', 'tablet', 'desktop'],
//   properties: {
//     color: vars.colors,
//     backgroundColor: vars.colors,
//     borderColor: vars.colors,
//     marginTop: vars.spaces,
//     marginBottom: vars.spaces,
//     marginLeft: vars.spaces,
//     marginRight: vars.spaces,
//     paddingTop: vars.spaces,
//     paddingBottom: vars.spaces,
//     paddingLeft: vars.spaces,
//     paddingRight: vars.spaces,
//     borderRadius: vars.rounded,
//     height: vars.spaces,
//     display: ['none', 'flex', 'grid', 'block'],
//     flexDirection: ['row', 'row-reverse', 'column'],
//     width: { ...vars.widths, ...vars.spaces },
//     gridTemplateColumns: vars.gridColsTemplate,
//     gridTemplateRows: vars.gridColsTemplate,
//     gridColumn: vars.gridColSpan,
//     gridRow: vars.gridColSpan,
//     gridAutoColumns: vars.gridAuto,
//     gridAutoRows: vars.gridAuto,
//     gap: vars.spaces,
//     boxShadow: vars.boxShadow,
//     justifyContent: [
//       'stretch',
//       'flex-start',
//       'center',
//       'flex-end',
//       'space-around',
//       'space-between'
//     ],
//     flex: ['1'],
//     order: vars.orders,
//     alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
//     position: ['relative', 'absolute', 'fixed', 'sticky'],
//     fontSize: vars.fontSizes,
//     fontWeight: {
//       thin: '100',
//       extralight: '200',
//       light: '300',
//       normal: '400',
//       medium: '500',
//       semibold: '600',
//       bold: '700',
//       extrabold: '800',
//       black: '900'
//     },
//     overflow: ['visible', 'hidden', 'scroll', 'auto']
//   },
//   shorthands: {
//     margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
//     marginX: ['marginLeft', 'marginRight'],
//     marginY: ['marginTop', 'marginBottom'],
//     padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
//     paddingX: ['paddingLeft', 'paddingRight'],
//     paddingY: ['paddingTop', 'paddingBottom']
//   }
// });

// export const sprinkles = createSprinkles(responsiveProperties);
// export type Sprinkles = Parameters<typeof sprinkles>[0];
