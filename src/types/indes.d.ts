declare namespace JSX {
	type Element = string
	interface IntrinsicElements {
		[eleName: string]: any
	}
}

declare module '*.module.scss'
declare module 'jsxFactory' {
	const DOMcreateFragment: HTMLElement
	const DOMcreateElement: HTMLElement
}
