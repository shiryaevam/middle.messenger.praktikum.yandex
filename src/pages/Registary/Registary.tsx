/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Registary.module.scss'
import Routes from '../AppRoutes/Routes'
import { Input2 } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import { useValidatorForms } from '../../utils/hook/useValidatorForms'
const Registary = () => {
	const FirstName = new Input2({
		value: '',
		placeHolder: 'Имя',
		type: 'text',
		name: 'first_name',
	})
	const SecondName = new Input2({
		value: '',
		placeHolder: 'Фамилия',
		type: 'text',
		name: 'second_name',
	})
	const Login = new Input2({
		value: '',
		placeHolder: 'Логин',
		type: 'text',
		name: 'login',
	})
	const Email = new Input2({
		value: '',
		placeHolder: 'Почта',
		type: 'text',
		name: 'email',
	})
	const Password = new Input2({
		value: '',
		placeHolder: 'Пароль',
		type: 'password',
		name: 'password',
	})
	const PhoneNumber = new Input2({
		value: '',
		type: 'text',
		name: 'phone',
		placeHolder: 'Телефон',
	})

	const onSubmit = (e: Event) => {
		e.preventDefault()
		const forms = document.getElementById('register')
		if (!!forms) {
			const formData = new FormData(forms as HTMLFormElement)
			const first_name = formData.get('first_name')
			const second_name = formData.get('second_name')
			const login = formData.get('login')
			const email = formData.get('email')
			const password = formData.get('password')
			const phone = formData.get('phone')

			const allForm = {
				first_name,
				second_name,
				login,
				email,
				password,
				phone,
			}

			console.log('allForms', allForm)

			const { errors } = useValidatorForms(allForm)

			console.log('errorForms', errors)
		}
	}

	return (
		<main className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<div className={styles.basicBlock}>
					<h2 className={styles.headerName}>Регистрация</h2>
					<FirstName />
					<SecondName />
					<Login />
					<Email />
					<Password />
					<PhoneNumber />
				</div>
				<div className={styles.basicBlock}>
					<Button type="submit" onClick={onSubmit} variant="blue">
						Зарегистрироваться
					</Button>
					<Link to={Routes.LOGIN}>Войти</Link>
				</div>
			</form>
		</main>
	)
}

export default Registary
