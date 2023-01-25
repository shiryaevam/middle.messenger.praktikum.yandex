/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Registary.module.scss'
import Routes from '../AppRoutes/Routes'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
const Registary = () => {
	return (
		<main className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<div className={styles.basicBlock}>
					<h2 className={styles.headerName}>Регистрация</h2>
					<Input placeHolder="Имя" type="text" name="first_name" />
					<Input placeHolder="Фамилия" type="text" name="second_name" />
					<Input placeHolder="Логин" type="text" name="login" />
					<Input placeHolder="Почта" type="text" name="email" />
					<Input placeHolder="Пароль" type="password" name="password" />
					<Input placeHolder="Телефон" type="text" name="phone" />
				</div>
				<div className={styles.basicBlock}>
					<Button type="blue">Зарегистрироваться</Button>
					<Link to={Routes.LOGIN}>Войти</Link>
				</div>
			</form>
		</main>
	)
}

export default Registary
