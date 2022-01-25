export const _class = (classNames): string =>
	[...new Set(classNames.filter((className = '') => className.length))].join(' ');

export const childsHeight = (elem: HTMLElement) =>
	Array.from(elem.querySelectorAll(':scope > *')).reduce(
		(acc, v) => acc + v.getBoundingClientRect().height,
		0
	);
