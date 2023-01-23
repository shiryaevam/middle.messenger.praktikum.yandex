/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Profile.module.scss'
import Routes from '../AppRoutes/Routes'
const Profile = () => {
	return (
		<div className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<img src="" alt="Avatar" />
				<div>
					<p>Name</p>
					<input type="text" name="email" />
					<input type="text" name="login" />
					<input type="text" name="first_name" />
					<input type="text" name="second_name" />
					<input type="password" name="nickName" />
					<input type="text" name="phone" />
				</div>
				<div>
					<button>Изменить данные</button>
					<a href={Routes.PROFILE.CHANGE_PASSWORD}>Изменить пароль</a>
					<button>Выйти</button>
				</div>
			</form>
		</div>
	)
}

export default Profile
