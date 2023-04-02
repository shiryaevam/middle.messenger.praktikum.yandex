import { Children } from '../../types/commonTypes'
import Block from '../createComponent/block'

interface entityMapData {
	[key: string]: string
}
export const entityMap: entityMapData = {
	'&': 'amp',
	'<': 'lt',
	'>': 'gt',
	'"': 'quot',
	"'": '#39',
	'/': '#x2F',
}
export const appendChild = (
	parent: HTMLElement,
	child: string | HTMLElement | number,
) => {
	if (Array.isArray(child)) {
		child.forEach((nestedChild) => appendChild(parent, nestedChild))
	} else if (typeof child === 'string') {
		parent.appendChild(document.createTextNode(child))
	} else if (typeof child === 'number') {
		parent.appendChild(document.createTextNode(child.toString()))
	} else {
		parent.appendChild(child)
	}
}
const AttributeMapper = (val: string) =>
	({
		tabIndex: 'tabindex',
		className: 'class',
		readOnly: 'readonly',
	}[val] || val)
const escapeHtml = (str: object[] | string) =>
	String(str).replace(/[&<>"'\/\\]/g, (s) => `&${entityMap[s]};`)
export const DOMcreateElement = (
	// eslint-disable-next-line @typescript-eslint/ban-types
	tag: Function | string | Block,
	props?: { [key: string]: any },
	...children: Children
): HTMLElement => {
	if (typeof tag === 'function') {
		return tag(props, children)
	}

	const element =
		tag instanceof Block ? tag.getContent() : document.createElement(tag)

	if (tag instanceof Block) {
		const { __self, __source, ...excludeprops } = props ?? {}
		tag.setProps(excludeprops)
	} else {
		Object.entries(props || {}).forEach(([name, val]) => {
			name = escapeHtml(AttributeMapper(name))
			if (name.startsWith('on') && name.toLowerCase() in window) {
				element.addEventListener(name.toLowerCase().substr(2), val)
			} else if (name === 'ref') {
				val(element)
			} else if (name === 'style') {
				Object.assign(element.style, val)
			} else if (val === true) {
				element.setAttribute(name, name)
			} else if (name === 'href' || name === 'src') {
				element.setAttribute(name, val)
			} else if (val !== false && val != null && name !== '__source') {
				element.setAttribute(name, escapeHtml(val))
			} else if (val === false) {
				element.removeAttribute(name)
			}
		})
	}
	children.forEach((child) => {
		appendChild(element, child)
	})

	return element
}

export const DOMcreateFragment = (
	_props: { [key: string]: any },
	...children: (HTMLElement | string)[]
) => {
	return children
}
