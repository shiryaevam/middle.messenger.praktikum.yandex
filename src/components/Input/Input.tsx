/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement, DOMcreateFragment } from 'jsxFactory'
import './Input.module.scss'
import Block from '../../utils/createComponent/block'
import Validator from '../../utils/Validator/Validator'
import React from 'react'
import { InputType } from './InputType'

export class Input2 extends Block<InputType> {
	constructor(props: InputType) {
		super('div', props)
	}

	protected componentDidUpdate(
		oldProps: InputType,
		newProps: InputType,
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
		const { value, errors, name, className, placeHolder, type } = this.props
		const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const props = this.props
			const newValue = e.target.value
			this.setProps({ ...props, value: newValue })
		}

		const onFOcusAndBlur = () => {
			// eslint-disable-next-line @typescript-eslint/no-this-alias
			const self = this
			const { errors: validate } = Validator({ name, value })

			document
				.querySelector(`input[name=${name}]`)
				?.removeEventListener('blur', onFOcusAndBlur)
			document
				.querySelector(`input[name=${name}]`)
				?.removeEventListener('focus', onFOcusAndBlur)
			self.setProps({ ...self.props, errors: validate })
		}

		document
			.querySelector(`input[name=${name}]`)
			?.addEventListener('blur', onFOcusAndBlur)
		document
			.querySelector(`input[name=${name}]`)
			?.addEventListener('focus', onFOcusAndBlur)

		return (
			<>
				<input
					value={value}
					name={name}
					className={className}
					placeholder={placeHolder}
					type={type}
					onChange={onChange}
				/>
				{Object.entries(errors ?? {}).map(([name, val]) => {
					return (
						<>
							<p>{name}</p>
							<p>{val}</p>
						</>
					)
				})}
			</>
		)
	}
}
