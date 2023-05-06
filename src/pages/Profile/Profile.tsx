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
import { Api } from '../../Api/HTTPCLIENT'
import Block from '../../utils/createComponent/block'
class Profile extends Block<{
	state: {
		first_name: string
		second_name: string
		login: string
		email: string
		phone: string
		avatar: string
		display_name: string | null
	}
}> {
	constructor() {
		super('main', {
			state: {
				first_name: '',
				second_name: '',
				login: '',
				email: '',
				password: '',
				phone: '',
				avatar: '',
			},
		})
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.element.className = 'wrapperPage'
	}

	init() {
		try {
			;(async () =>
				await Api.get('auth/user').then((data) => {
					this.setProps({ state: data })
				}))()
		} catch {
			console.log('error auth/user')
		}

		// super.init()
	}

	render() {
		const onSubmit = async (e: Event) => {
			e.preventDefault()
			const forms = document.getElementById('register')
			if (!!forms) {
				const formData = new FormData(forms as HTMLFormElement)
				const first_name = formData.get('first_name')
				const second_name = formData.get('second_name')
				const display_name = formData.get('display_name')
				const login = formData.get('login')
				const email = formData.get('email')
				const phone = formData.get('phone')
				const avatar = formData.get('avatar')

				const newAvatar = avatar.size
					? await Api.post('resources', { data: avatar }).then((value) =>
							JSON.parse(value.response),
					  )
					: null

				console.log('newAvatar', newAvatar)

				const allForm = {
					first_name,
					second_name,
					display_name: display_name ?? '',
					login,
					email,
					phone,
					avatar: newAvatar.path ?? this.props.state.avatar,
				}
				console.log('allForm', allForm)

				const { errors } = useValidatorForms(allForm)
				let isError = false
				Object.entries(errors).map(([_, { errors: currentError }]) => {
					if (currentError && Object.keys(currentError).length) {
						isError = true
					}
				})

				if (isError) {
					return
				}
				try {
					const result = await Api.put('user/profile', {
						data: allForm,
					})
					if (result.status === 200) {
						alert('Успешное обновление')
						// setTimeout(() => {
						// 	return (window.location.href = 'login')
						// }, 1800)
					}
				} catch (e) {
					console.error('catch', e)
				}
			}
		}

		const {
			first_name,
			second_name,
			login,
			email,
			phone,
			avatar,
			display_name,
		} = this.props.state

		const name = 'Иван'

		const FirstName = new Input2({
			value: first_name,
			placeHolder: 'Имя',
			type: 'text',
			name: 'first_name',
		})

		const DisplayName = new Input2({
			value: display_name ?? '',
			placeHolder: 'Имя в чате',
			type: 'text',
			name: 'display_name',
		})

		const SecondName = new Input2({
			value: second_name,
			placeHolder: 'Фамилия',
			type: 'text',
			name: 'second_name',
		})

		const Login = new Input2({
			value: login,
			placeHolder: 'Логин',
			type: 'text',
			name: 'login',
		})
		const Email = new Input2({
			value: email,
			placeHolder: 'Почта',
			type: 'text',
			name: 'email',
		})
		const PhoneNumber = new Input2({
			value: phone,
			type: 'text',
			name: 'phone',
			placeHolder: 'Телефон',
		})

		console.log('avatar', avatar)

		return (
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<div className={styles.basicBlock}>
					<img
						className="profileAvatar"
						src={
							avatar
								? `https://ya-praktikum.tech/api/v2/resources/${avatar}`
								: DefaultAvatar
						}
						alt="avatar"
					/>
					{/*<SvgField*/}
					{/*	className="profileAvatar"*/}
					{/*	src={*/}
					{/*		avatar*/}
					{/*			? `https://ya-praktikum.tech/api/v2/resources/${avatar}`*/}
					{/*			: DefaultAvatar*/}
					{/*	}*/}
					{/*/>*/}
					<h2 className={styles.headerName}>{name}</h2>
					<FirstName />
					<SecondName />
					<DisplayName />
					<Login />
					<Email />
					<PhoneNumber />
					<input type="file" name="avatar" />
				</div>
				<div className={styles.basicBlock}>
					<Button type="submit" variant="blue" onClick={onSubmit}>
						Изменить данные
					</Button>
					<Link to={Routes.PROFILE.CHANGE_PASSWORD}>Изменить пароль</Link>
					<Link to={Routes.LOGIN}>Выйти</Link>
				</div>
			</form>
		)
	}
}

export default Profile
