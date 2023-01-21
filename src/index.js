/** @jsx DOMcreateElement */
/*** @jsxFrag DOMcreateFragment */

import { DOMcreateElement, DOMcreateFragment } from './jsxFactory'
import styles from './index.module.scss'


const App = () => (
	<div  className={styles.root}>
		<p>Start Project</p>
	</div>
)

// @ts-ignore
document.getElementById('root')?.appendChild(<App />)
