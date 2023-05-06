import e from 'express'

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
			// const extractAccessToken = () =>
			// 	document.cookie.match(/\baccess_token=(.*?)(?:;|$)/)

			// const token = extractAccessToken()
			// if (!token || token.length < 2 || !token[1]) {
			// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// 	// @ts-ignore
			// 	setTimeout(() => {
			// 		return (window.location.href = 'login')
			// 	}, 1800)
			// }

			const xhr = new XMLHttpRequest()
			xhr.open(method, `https://ya-praktikum.tech/api/v2/${url}`, true)
			xhr.withCredentials = true
			if (url === 'resources') {
				xhr.setRequestHeader('Content-Type', 'multipart/form-data')
				xhr.setRequestHeader('accept', 'multipart/form-data')
			} else {
				xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
			}

			if (xhr.status === 401) {
				window.location.href = 'login'
			}

			xhr.onload = function () {
				if (url === 'resources') {
					resolve(xhr)
				} else {
					resolve(JSON.parse(xhr.response))
				}
			}

			xhr.onabort = reject
			xhr.onerror = reject
			xhr.ontimeout = reject

			if (method === METHOD.GET || !data) {
				xhr.send()
			} else {
				if (url === 'resources') {
					const formData = new FormData()
					formData.append('file', data, data.name)
					console.log('formData', formData.getAll('file'))
					xhr.send(formData)
				} else {
					xhr.send(JSON.stringify(data))
				}
			}
		})
	}
}

export const Api = new HTTPTransport()
