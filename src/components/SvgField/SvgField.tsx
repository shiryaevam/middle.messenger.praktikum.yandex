/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
const SvgField = ({ src, className }: { className?: string; src: string }) => {
	const innerSvg = (target: HTMLDivElement | null) => {
		if (target) {
			target.innerHTML = src
		}
	}

	return <div className={className} ref={innerSvg}></div>
}

export default SvgField
