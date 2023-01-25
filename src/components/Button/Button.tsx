/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import styles from './Button.module.scss'

type Button = {
	// в type планируется более чем два варианта
	type: 'blue' | 'default'
}

const Button = ({ type = 'default' }: Button, children: Children) => {
	const isBlue = type === 'blue'

	return (
		<button className={`${styles.button} ${isBlue ? styles.blue : ''}`}>
			{children}
		</button>
	)
}

export default Button
