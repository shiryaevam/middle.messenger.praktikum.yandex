enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

type Options<T = any> = {
	method: METHOD
	data?: T
}

type OptionsWithoutMethod = Omit<Options, 'method'>

class HTTPTransport {
	get(
		url: string,
		options: OptionsWithoutMethod = {},
	): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.GET })
	}
	post(
		url: string,
		options: OptionsWithoutMethod = {},
	): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.POST })
	}
	put(
		url: string,
		options: OptionsWithoutMethod = {},
	): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.PUT })
	}
	patch(
		url: string,
		options: OptionsWithoutMethod = {},
	): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.PATCH })
	}
	delete(
		url: string,
		options: OptionsWithoutMethod = {},
	): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.DELETE })
	}

	request(
		url: string,
		options: Options = { method: METHOD.GET },
	): Promise<XMLHttpRequest> {
		const { method, data } = options

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(method, `https://ya-praktikum.tech/api/v2/${url}`, true)
			xhr.withCredentials = true
			if (url !== 'resources') {
				xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
			}

			if (xhr.status === 401) {
				window.location.href = 'login'
			}

			xhr.onload = function () {
				if (url.match('resources')?.length) {
					return resolve(xhr)
				}
				resolve(JSON.parse(xhr.response))
			}

			xhr.onabort = reject
			xhr.onerror = reject
			xhr.ontimeout = reject

			if (method === METHOD.GET || !data) {
				xhr.send()
			} else {
				if (url === 'resources') {
					const formData = new FormData()
					console.log('data', data)

					formData.append('resource', data)
					xhr.send(formData)
				} else {
					xhr.send(JSON.stringify(data))
				}
			}
		})
	}
}

export const Api = new HTTPTransport()
