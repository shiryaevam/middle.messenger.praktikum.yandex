/** @jsx DOMcreateElement */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import './Link.module.scss'

type Link = {
	to: string
	className?: string
}

const Link = ({ className = '', to = '' }: Link, children: Children) => {
	return (
		<a href={to} className={`${className}`}>
			{children}
		</a>
	)
}

export default Link
