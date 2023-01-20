/** @jsx DOMcreateElement */
/*** @jsxFrag DOMcreateFragment */

import { DOMcreateElement, DOMcreateFragment } from './jsxFactory'


const App = () => (
	<div>
		<p>Start Project</p>
	</div>
)

// @ts-ignore
document.getElementById('root')?.appendChild(<App />)
