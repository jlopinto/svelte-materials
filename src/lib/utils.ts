export const _class = (classNames): string =>
	[...new Set(classNames.filter((className = '') => className.length))].join(' ');
