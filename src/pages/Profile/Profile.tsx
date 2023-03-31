/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Profile.module.scss'
import Routes from '../AppRoutes/Routes'
import { Input2 } from '../../components/Input/Input'
import Link from '../../components/Link/Link'
import DefaultAvatar from 'bundle-text:../../assets/icons/defaultAvatar.svg'
import SvgField from '../../components/SvgField/SvgField'
import Button from '../../components/Button/Button'
import { useValidatorForms } from '../../utils/hook/useValidatorForms'
const Profile = () => {
	const onSubmit = (e: Event) => {
		e.preventDefault()
		const forms = document.getElementById('register')
		if (!!forms) {
			const formData = new FormData(forms as HTMLFormElement)
			const first_name = formData.get('first_name')
			const second_name = formData.get('second_name')
			const display_name = formData.get('display_name')
			const login = formData.get('login')
			const email = formData.get('email')
			const password = formData.get('password')
			const phone = formData.get('phone')
			const avatar = formData.get('avatar')
			const allForm = {
				first_name,
				second_name,
				display_name,
				login,
				email,
				password,
				phone,
				avatar,
			}
			console.log('allForm', allForm)

			const { errors } = useValidatorForms(allForm)

			console.log('errorForms', errors)
		}
	}

	const name = 'Иван'

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
	const DisplayName = new Input2({
		value: '',
		placeHolder: 'Имя в чате',
		type: 'text',
		name: 'display_name',
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
	const Avatar = new Input2({
		value: '',
		type: 'text',
		name: 'avatar',
		placeHolder: 'Изменение аватара',
	})

	return (
		<main className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<div className={styles.basicBlock}>
					<SvgField className="profileAvatar" src={DefaultAvatar} />
					<h2 className={styles.headerName}>{name}</h2>
					<FirstName />
					<SecondName />
					<DisplayName />
					<Login />
					<Email />
					<Password />
					<PhoneNumber />
					<Avatar />
				</div>
				<div className={styles.basicBlock}>
					<Button type="submit" variant="blue" onClick={onSubmit}>
						Изменить данные
					</Button>
					<Link to={Routes.PROFILE.CHANGE_PASSWORD}>Изменить пароль</Link>
					<Link to={Routes.LOGIN}>Выйти</Link>
				</div>
			</form>
		</main>
	)
}

export default Profile
