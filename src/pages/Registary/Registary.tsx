/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Registary.module.scss'
import Routes from '../AppRoutes/Routes'
const Registary = () => {
	return (
		<div className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<div>
					<p>Регистрация</p>
					<input type="text" name="first_name" />
					<input type="text" name="second_name" />
					<input type="text" name="login" />
					<input type="text" name="email" />
					<input type="password" name="password" />
					<input type="text" name="phone" />
				</div>
				<div>
					<input type="submit">Зарегистрироваться</input>
					<a href={Routes.LOGIN}>Войти</a>
				</div>
			</form>
		</div>
	)
}

export default Registary
