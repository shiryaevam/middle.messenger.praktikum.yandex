/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './Profile.module.scss'
import Routes from '../AppRoutes/Routes'
import Input from '../../components/Input/Input'
import Link from '../../components/Link/Link'
import DefaultAvatar from 'bundle-text:../../assets/icons/defaultAvatar.svg'
import SvgField from '../../components/SvgField/SvgField'

// const SwgSprite = () => DefaultAvatar
const Profile = () => {
	const name = 'Иван'

	return (
		<main className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<div className={styles.basicBlock}>
					<SvgField className="profileAvatar" src={DefaultAvatar} />
					<h2 className={styles.headerName}>{name}</h2>
					<Input placeHolder="Имя" type="text" name="first_name" />
					<Input placeHolder="Фамилия" type="text" name="second_name" />
					<Input placeHolder="Логин" type="text" name="login" />
					<Input placeHolder="Почта" type="text" name="email" />
					<Input placeHolder="Пароль" type="password" name="password" />
					<Input placeHolder="Телефон" type="text" name="phone" />
				</div>
				<div className={styles.basicBlock}>
					<Link to="">Изменить данные</Link>
					<Link to={Routes.PROFILE.CHANGE_PASSWORD}>Изменить пароль</Link>
					<Link to={Routes.LOGIN}>Выйти</Link>
				</div>
			</form>
		</main>
	)
}

export default Profile
