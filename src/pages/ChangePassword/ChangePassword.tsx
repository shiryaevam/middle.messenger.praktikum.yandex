/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './ChangePassword.module.scss'
const ChangePassword = () => {
	return (
		<div className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<img src="" alt="Avatar" />
				<div>
					<input type="text" name="oldPassword" />
					<input type="text" name="newPassword" />
					<input type="text" name="repeatPassword" />
				</div>
				<div>
					<button>Сохранить</button>
				</div>
			</form>
		</div>
	)
}

export default ChangePassword
