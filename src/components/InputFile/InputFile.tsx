/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement, DOMcreateFragment } from 'jsxFactory'
import './InputFile.module.scss'
import Block from '../../utils/createComponent/block'
import { InputFileType } from './InputFileType'

export class InputFile extends Block<InputFileType> {
	constructor(props: InputFileType) {
		super('div', props)
	}

	protected componentDidUpdate(
		oldProps: InputFileType,
		newProps: InputFileType,
	): boolean {
		if (oldProps.value !== newProps.value) {
			return true
		}

		return !Object.is(
			JSON.stringify(oldProps.errors),
			JSON.stringify(newProps.errors),
		)
	}

	render() {
		const { name, className, placeHolder, type } = this.props
		// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// 	// const formData = new FormData()
		// 	// formData.append(e.target.files[0].name, e.target.files[0])
		// 	// console.log('formData', formData)
		// 	// console.log('e', e.target.files[0])
		// 	const props = this.props
		// 	const newValue = e.target.files[0]
		// 	// this.setProps({ ...props, value: newValue })
		// }

		// const onFOcusAndBlur = () => {
		// 	// eslint-disable-next-line @typescript-eslint/no-this-alias
		// 	const self = this
		// 	const { errors: validate } = Validator({ name, value })
		//
		// 	document
		// 		.querySelector(`input[name=${name}]`)
		// 		?.removeEventListener('blur', onFOcusAndBlur)
		// 	document
		// 		.querySelector(`input[name=${name}]`)
		// 		?.removeEventListener('focus', onFOcusAndBlur)
		// 	self.setProps({ ...self.props, errors: validate })
		// }
		//
		// document
		// 	.querySelector(`input[name=${name}]`)
		// 	?.addEventListener('blur', onFOcusAndBlur)
		// document
		// 	.querySelector(`input[name=${name}]`)
		// 	?.addEventListener('focus', onFOcusAndBlur)

		return (
			<>
				<input
					// value={value}
					name={name}
					className={className}
					placeholder={placeHolder}
					type={'file'}
					// onChange={onChange}
				/>
				{/*{Object.entries(errors ?? {}).map(([name, val]) => {*/}
				{/*	return (*/}
				{/*		<>*/}
				{/*			<p>{name}</p>*/}
				{/*			<p>{val}</p>*/}
				{/*		</>*/}
				{/*	)*/}
				{/*})}*/}
			</>
		)
	}
}
