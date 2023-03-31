/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import './Button.module.scss'

type Button = {
	// в type планируется более чем два варианта
	variant?: 'blue' | 'default'
	className?: string
	type?: string
	onClick?: (e: Event) => void
}

const Button = (
	{ className = '', variant = 'default', type, onClick }: Button,
	children: Children,
) => {
	const isBlue = variant === 'blue'

	return (
		<button
			onClick={(e: Event) => (onClick ? onClick(e) : {})}
			type={type}
			className={`${isBlue ? 'blue' : ''} ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
