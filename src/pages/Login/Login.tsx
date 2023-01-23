/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Login.module.scss'
const Login = () => {
	return (
		<div className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="login">
				<div>
					<p>Вход</p>
					<input type="text" name="login" />
					<input type="text" name="password" />
				</div>
				<div>
					<input type="submit">Войти</input>
					<p>Нет Аккаунта?</p>
				</div>
			</form>
		</div>
	)
}

export default Login
