export const cleanClass = (classNames): string =>
  [...new Set(classNames.filter((className = '') => className.length))].join(' ');

export const childsHeight = (parent: HTMLElement) =>
  Array.from(parent.querySelectorAll(':scope > *')).reduce(
    (acc, v) => acc + v.getBoundingClientRect().height,
    0
  );

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const generateShades = (colorName, baseColor, variations) => {
  const ret = {};
  variations.forEach(({ name, fn, value }) => {
    ret[`${colorName}${name}`] = fn(value, baseColor);
  });

  return ret;
};

export const generatePalette = (colors = [], shadesConfig) => {
  let palette = {};
  colors.forEach(({ color, name }) => {
    palette = { ...palette, ...generateShades(name, color, shadesConfig) };
  });

  return palette;
};

export const inlineCssVars = (styles: object, prefix: string, separator = '-') =>
  [...Object.entries(styles)]
    .map(([property, value]) => {
      return `${prefix}${separator}${property}: ${value};`;
    })
    .join(' ');
