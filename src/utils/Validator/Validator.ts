export enum validateRow {
	FirstName = 'first_name',
	SecondName = 'second_name',
	Login = 'login',
	Email = 'email',
	Password = 'password',
	Phone = 'phone',
	Message = 'message',
}

type ValidateType = {
	name: string
	value: string
}

const Validator = ({ name, value }: ValidateType) => {
	const result: { errors: { [key: string]: string | null } } = { errors: {} }
	const latinKiril = new RegExp(/[A-ZА-Я]/gi)
	const latin = new RegExp(/[А-я]/gi)
	const firstSymbolUpper = new RegExp(/^[a-zа-я]/)
	const numbers = new RegExp(/\d/)
	const allSymbols = new RegExp(/\W(^-)+/g)
	const allSymbolsExludePodcherk = new RegExp(/[^a-zA-Z0-9-_]/g)

	const parseLatinKiril = () =>
		value.match(latinKiril)?.length
			? null
			: (result.errors = {
					...result.errors,
					latinKiril: 'Только латиница или кириллица',
			  })
	const parseFirstSymbol = () =>
		value.match(firstSymbolUpper)?.length
			? (result.errors = {
					...result.errors,
					firsSymbol: 'Первая буква должна быть заглавной',
			  })
			: null

	const parseNumber = () =>
		value.match(numbers)?.length
			? (result.errors = {
					...result.errors,
					numbers: 'без цифр',
			  })
			: null

	const parseSymbols = () =>
		value.match(allSymbols)?.length
			? (result.errors = {
					...result.errors,
					symbols: 'нет спецсимволов',
			  })
			: null

	const parseSymbolsExcludePodcher = () =>
		value.match(allSymbolsExludePodcherk)?.length
			? (result.errors = {
					...result.errors,
					symbolsExcludePodcherk:
						'без спецсимволов за исключением подчеркивания и дефиса',
			  })
			: null

	const parseLatin = () =>
		!value.match(latin)?.length
			? null
			: (result.errors = {
					...result.errors,
					latin: 'Только латиница',
			  })

	const parseRangeFrom3to20 = () =>
		value.length < 3 || value.length > 20
			? (result.errors = {
					...result.errors,
					range: `количество символов от 3 до 20`,
			  })
			: null

	const parseNumbersAndSymbol = () => {
		if (value.match(numbers)?.length !== value.length) {
			return
		}

		return (result.errors = {
			...result.errors,
			numbersAndDigit: 'Логин не может состоять только из цифр',
		})
	}

	const parseNoEmptySpase = () =>
		value.match(/\s/g)?.length
			? (result.errors = {
					...result.errors,
					noEmpty: `без пробелов`,
			  })
			: null

	const parseEmail = () =>
		value.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		)?.length
			? null
			: (result.errors = {
					...result.errors,
					email: `не валидный емайл`,
			  })

	const parsePassword = () => {
		value.length < 8 || value.length > 40
			? (result.errors = {
					...result.errors,
					range: `количество символов от 8 до 40`,
			  })
			: null

		!value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)?.length
			? (result.errors = {
					...result.errors,
					oneDigitalOneUpper: `хотя бы одна заглавная буква и цифра.`,
			  })
			: null
	}

	switch (name) {
		case validateRow.FirstName:
		case validateRow.SecondName:
			parseLatinKiril()
			parseFirstSymbol()
			parseNumber()
			parseSymbols()

			break

		case validateRow.Login:
			parseRangeFrom3to20()
			parseLatin()
			parseNumbersAndSymbol()
			parseNoEmptySpase()
			parseSymbolsExcludePodcher()

			break
		case validateRow.Email:
			parseEmail()

			break

		case validateRow.Password:
			parsePassword()

			break
		case validateRow.Phone:
			!value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
				?.length
				? (result.errors = {
						...result.errors,
						phone: 'не корректный телефон',
				  })
				: null

			break
		case validateRow.Message:
			!value.length
				? (result.errors = {
						...result.errors,
						message: 'поле не может быть пустым',
				  })
				: null

			break

		default:
			return 'некорректный name'
	}

	return result
}

export default Validator
