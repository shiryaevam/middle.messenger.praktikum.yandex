/** @jsx DOMcreateElement */

import { DOMcreateElement } from './utils/jsxFactory/jsxFactory'
import { root } from './index.module.scss'

const App = () => (
	<div className={root}>
		<p>Start Project</p>
	</div>
)

// @ts-ignore
document.getElementById('root')?.appendChild(<App />)
