import EventBus from './eventBus'

class Block {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	}

	protected props: Record<string, unknown>
	private eventBus: () => EventBus

	private _element: HTMLElement | null = null

	private _meta: { tagName: string; props: any }

	constructor(tagName = 'div', props: any = {}) {
		const eventBus = new EventBus()
		this._meta = {
			tagName,
			props,
		}

		this.props = this._makePropsProxy(props)

		this.eventBus = () => eventBus

		this._registerEvents(eventBus)
		eventBus.emit(Block.EVENTS.INIT)
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
	}

	_createResources() {
		const { tagName } = this._meta ?? {}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this._element = this._createDocumentElement(tagName)
	}

	init() {
		this._createResources()

		this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
	}

	_componentDidMount() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.componentDidMount()
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	componentDidMount(oldProps) {}

	public dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM)
	}

	private _componentDidUpdate(oldProps: any, newProps: any) {
		const response = this.componentDidUpdate(oldProps, newProps)
		if (!response) {
			return
		}
		this._render()
	}
	protected componentDidUpdate(oldProps: any, newProps: any) {
		return true
	}

	setProps = (nextProps: any) => {
		if (!nextProps) {
			return
		}

		Object.assign(this.props, nextProps)
	}

	get element() {
		return this._element
	}

	private _render() {
		const block = this.render()
		// Этот небезопасный метод для упрощения логики
		// Используйте шаблонизатор из npm или напишите свой безопасный
		// Нужно не в строку компилировать (или делать это правильно),
		// либо сразу в DOM-элементы возвращать из compile DOM-ноду
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this._element.innerHTML = block
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	protected render() {}

	getContent() {
		return this.element
	}

	_makePropsProxy(props: { [key: string]: any }) {
		// Можно и так передать this
		// Такой способ больше не применяется с приходом ES6+
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const self = this

		return new Proxy(props, {
			get(target, prop) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const value = target[prop]

				return typeof value === 'function' ? value.bind(target) : value
			},
			set(target, prop, value) {
				const oldTarget = { ...target }

				target[prop] = value

				self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)

				return true
			},
			deleteProperty() {
				throw new Error('Нет доступа')
			},
		})
	}

	_createDocumentElement(tagName: string) {
		// Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
		return document.createElement(tagName)
	}

	show() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.getContent().style.display = 'block'
	}

	hide() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.getContent().style.display = 'none'
	}
}

export default Block
