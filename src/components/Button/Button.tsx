/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import './Button.module.scss'

type Button = {
	// в type планируется более чем два варианта
	type: 'blue' | 'default'
	className?: string
}

const Button = (
	{ className = '', type = 'default' }: Button,
	children: Children,
) => {
	const isBlue = type === 'blue'

	return (
		<button className={`${isBlue ? 'blue' : ''} ${className}`}>
			{children}
		</button>
	)
}

export default Button
