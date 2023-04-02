/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Login.module.scss'
import Routes from '../AppRoutes/Routes'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import { Input2 } from '../../components/Input/Input'
import Block from '../../utils/createComponent/block'
import { useValidatorForms } from '../../utils/hook/useValidatorForms'
class Login extends Block<{ state: { login: string; password: string } }> {
	constructor() {
		super('main', { state: { login: '', password: '' } })
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.element.className = 'wrapperPage'
	}
	onSubmit(e: Event) {
		e.preventDefault()
		const forms = document.getElementById('login')
		if (!!forms) {
			const formData = new FormData(forms as HTMLFormElement)
			const login = formData.get('login')
			const password = formData.get('password')

			const allForm = {
				login,
				password,
			}
			console.log('allForm', allForm)

			const { errors } = useValidatorForms(allForm)

			console.log('errorForms', errors)
		}
	}

	override render() {
		const LoginInput = new Input2({
			value: '',
			type: 'text',
			name: 'login',
			placeHolder: 'Логин',
		})
		const PasswordInput = new Input2({
			value: '',
			type: 'password',
			name: 'password',
			placeHolder: 'Пароль',
		})

		return (
			<form className={`${styles.container} boxShadowAndBorder `} id="login">
				<div className={styles.basicBlock}>
					<h2 className={styles.namePage}>Вход</h2>
					<LoginInput />
					<PasswordInput />
				</div>
				<div className={styles.basicBlock}>
					<Button onClick={this.onSubmit} type="submit" variant="blue">
						Войти
					</Button>
					<Link to={Routes.REGISTRATION}>Нет Аккаунта?</Link>
				</div>
			</form>
		)
	}
}

export default Login
