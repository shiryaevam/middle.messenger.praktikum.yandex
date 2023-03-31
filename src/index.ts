import './index.scss'
import Block from './utils/createComponent/block'
import AppRoutes from './pages/AppRoutes/AppRoutes'

class App extends Block {
	constructor() {
		super('div')
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.element.className = 'root'
	}
	render() {
		return new AppRoutes().getContent()
	}
}

const newApp = new App().getContent()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
document.body.appendChild(newApp)
