import { validateRow } from '../../utils/Validator/Validator'

export type InputFileType = {
	className?: string
	name?: `${validateRow}`
	placeHolder?: string
	onChange?: (arg: Event) => void
	value: string
	errors?: { [key: string]: string }
}
