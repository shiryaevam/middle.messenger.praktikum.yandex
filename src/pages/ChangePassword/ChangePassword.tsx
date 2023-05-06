/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './ChangePassword.module.scss'
import { Input2 } from '../../components/Input/Input'
import SvgField from '../../components/SvgField/SvgField'
import DefaultAvatar from 'bundle-text:../../assets/icons/defaultAvatar.svg'
import Button from '../../components/Button/Button'
import { useValidatorForms } from '../../utils/hook/useValidatorForms'
import { extractAccessToken } from '../../utils/cookieValidate'

const ChangePassword = () => {
	extractAccessToken()
	const onSubmit = (e: Event) => {
		e.preventDefault()
		const forms = document.getElementById('changePassword')
		if (!!forms) {
			const formData = new FormData(forms as HTMLFormElement)
			const oldPassword = formData.get('oldPassword')
			const newPassword = formData.get('newPassword')
			const repeatPassword = formData.get('repeatPassword')
			const allForm = {
				oldPassword,
				newPassword,
				repeatPassword,
			}
			console.log('allForm', allForm)

			const { errors } = useValidatorForms(allForm)

			console.log('errorForms', errors)
		}
	}

	const OldPassword = new Input2({
		value: '',
		placeHolder: 'Старый пароль',
		type: 'text',
		name: 'oldPassword',
	})
	const NewPassword = new Input2({
		value: '',
		placeHolder: 'Новый пароль',
		type: 'text',
		name: 'newPassword',
	})
	const RepeatPassword = new Input2({
		value: '',
		placeHolder: 'Повторите пароль',
		type: 'text',
		name: 'repeatPassword',
	})

	return (
		<main className="wrapperPage">
			<form
				className={`${styles.container} boxShadowAndBorder `}
				id="changePassword"
			>
				<SvgField className="profileAvatar" src={DefaultAvatar} />
				<div>
					<OldPassword />
					<NewPassword />
					<RepeatPassword />
				</div>
				<Button type="submit" onClick={onSubmit} variant="blue">
					Сохранить
				</Button>
			</form>
		</main>
	)
}

export default ChangePassword
