import './Input.module.scss'
import Block from '../../utils/createComponent/block'
import Validator, { validateRow } from '../../utils/Validator/Validator'
import React from 'react'

type InputType = {
	type: string
	className?: string
	name?: `${validateRow}`
	placeHolder?: string
	onChange?: (arg: Event) => void
	value: string
}

export class Input2 extends Block<InputType> {
	constructor(props: InputType) {
		super('input', props)
		this.element.setAttribute('value', this.props.value)
		this.element.setAttribute('name', this.props?.name ?? '')
		this.element.setAttribute('placeholder', this.props?.placeHolder ?? '')
		this.element.setAttribute('type', this.props?.type)
		this.element.setAttribute('class', this.props?.className ?? '')
	}
	init() {
		super.init()
		this.element.onfocus = (e) =>
			Validator({
				name: this.props.name as `${validateRow}`,
				value: e.target?.value,
			})

		this.element.onfocus = (e) =>
			Validator({
				name: this.props.name as `${validateRow}`,
				value: e.target?.value,
			})
		this.element.onchange = (e) => this.onChange(e)
	}

	onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value
		const props = this.props
		this.setProps({ ...props, value: newValue })
		this.element.setAttribute('value', this.props.value)
	}

	// render() {
	//
	//
	// 	return null
	// }
}
