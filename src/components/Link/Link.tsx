/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import { Children } from '../../types/commonTypes'
import styles from './Link.module.scss'

type Link = {
	to: string
}

const Link = ({ to = '' }: Link, children: Children) => {
	return (
		<a href={to} className={styles.link}>
			{children}
		</a>
	)
}

export default Link
