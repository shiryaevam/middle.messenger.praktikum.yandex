/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './ChangePassword.module.scss'
import Input from '../../components/Input/Input'
import SvgField from '../../components/SvgField/SvgField'
import DefaultAvatar from 'bundle-text:../../assets/icons/defaultAvatar.svg'
import Button from '../../components/Button/Button'

const ChangePassword = () => {
	return (
		<div className="wrapperPage">
			<form className={`${styles.container} boxShadowAndBorder `} id="register">
				<SvgField className="profileAvatar" src={DefaultAvatar} />
				<div>
					<Input placeHolder="Старый пароль" type="text" name="oldPassword" />
					<Input placeHolder="Новый пароль" type="text" name="newPassword" />
					<Input
						placeHolder="Повторите пароль"
						type="text"
						name="repeatPassword"
					/>
				</div>
				<Button type="blue">Сохранить</Button>
			</form>
		</div>
	)
}

export default ChangePassword
