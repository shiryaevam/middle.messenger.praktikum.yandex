import validator from '../Validator/Validator'

export const useValidatorForms = (allForms: { [p: string]: string }) => {
	const result: any = {}

	for (const [name, value] of Object.entries(allForms)) {
		result[name] = validator({ name, value })
	}

	return { errors: result }
}
