/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import './Input.module.scss'

type Input = {
	type: string
	className?: string
	name?: string
	placeHolder?: string
}

const Input = (
	{ placeHolder, name, className = '', type = '' }: Input,
	children: Children,
) => {
	return (
		<input
			placeholder={placeHolder}
			name={name}
			type={type}
			className={className}
		>
			{children}
		</input>
	)
}

export default Input
