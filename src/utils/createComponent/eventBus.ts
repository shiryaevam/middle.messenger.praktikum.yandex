class EventBus {
	private readonly listeners: Record<string, Array<() => void>>
	constructor() {
		this.listeners = {}
	}

	on(event: string | number, callback: () => void) {
		if (!this.listeners[event]) {
			this.listeners[event] = []
		}

		this.listeners[event].push(callback)
	}

	off(event: string | number, callback: () => void) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`)
		}

		this.listeners[event] = this.listeners[event].filter(
			(listener) => listener !== callback,
		)
	}

	emit(event: string | number, ...args: void[]) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`)
		}

		this.listeners[event].forEach(function (listener: any) {
			listener(...args)
		})
	}
}
export default EventBus
