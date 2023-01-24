/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import styles from './Input.module.scss'

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
			className={`${className} ${styles.input}`}
		>
			{children}
		</input>
	)
}

export default Input
