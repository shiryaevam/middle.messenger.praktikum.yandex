declare namespace JSX {
	type Element = string
	interface IntrinsicElements {
		[eleName: string]: any
	}
}

declare module '*.module.scss'
declare module 'jsxFactory' {
	const DOMcreateFragment: HTMLElement
	const DOMcreateElement: (
		tagName: string,
		properties?: { [p: string]: any },
		childrens?: (HTMLElement | string)[],
	) => HTMLElement
}
declare module 'bundle-text:*'
