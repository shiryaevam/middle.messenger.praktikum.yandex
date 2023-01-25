/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Login.module.scss'
import Routes from '../AppRoutes/Routes'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import Input from '../../components/Input/Input'
const Login = () => {
	return (
		<main className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="login">
				<div className={styles.basicBlock}>
					<h2 className={styles.namePage}>Вход</h2>
					<Input placeHolder="Логин" type="text" name="login" />
					<Input placeHolder="Пароль" type="password" name="password" />
				</div>
				<div className={styles.basicBlock}>
					<Button type="blue">Войти</Button>
					<Link to={Routes.REGISTRATION}>Нет Аккаунта?</Link>
				</div>
			</form>
		</main>
	)
}

export default Login
