export const _class = (classNames): string =>
	[...new Set(classNames.filter((className = '') => className.length))].join(' ');

export const childsHeight = (parent: HTMLElement) =>
	Array.from(parent.querySelectorAll(':scope > *')).reduce(
		(acc, v) => acc + v.getBoundingClientRect().height,
		0
	);
