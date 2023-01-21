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
const appendChild = (parent: HTMLElement, child: string | HTMLElement) => {
	if (Array.isArray(child)) {
		child.forEach((nestedChild) => appendChild(parent, nestedChild))
	} else if (typeof child === 'string') {
		parent.appendChild(document.createTextNode(child))
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
	tag: Function | string,
	props?: { [key: string]: any },
	...children: (HTMLElement | string)[]
): HTMLElement => {
	if (typeof tag === 'function') return tag(props, children)

	const element = document.createElement(tag)

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
		} else if (val !== false && val != null && name !== '__source') {
			console.log([name, val])
			element.setAttribute(name, escapeHtml(val))
		} else if (val === false) {
			element.removeAttribute(name)
		}
	})

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
