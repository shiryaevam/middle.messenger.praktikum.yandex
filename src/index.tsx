/** @jsx DOMcreateElement */

import { DOMcreateElement } from 'jsxFactory'
import './index.scss'

import AppRoutes from './pages/AppRoutes/AppRoutes'

const App = () => (
	<div className="root">
		<AppRoutes />
	</div>
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
document.body.appendChild(<App />)
