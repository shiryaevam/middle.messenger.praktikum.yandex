/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement, DOMcreateFragment } from 'jsxFactory'
import Routes from './Routes'
import ErrorPages from '../ErrorPages/ErrorPages'
import Login from '../Login/Login'
import '../index.scss'
import Registary from '../Registary/Registary'
import Profile from '../Profile/Profile'
import ChangePassword from '../ChangePassword/ChangePassword'

const AppRoutes = () => {
	const { ROOT, LOGIN, REGISTRATION, ERROR_SERVER, PROFILE, CHATS } = Routes
	const path = window.location.pathname

	switch (path) {
		case ROOT:
			return (
				<>
					{Object.entries(Routes).map(([rout, address]) => {
						if (rout === 'PROFILE') {
							return Object.entries(address).map(
								([routProfile, addressProfile]) => {
									return (
										<div>
											<a href={addressProfile}>{routProfile}</a>
										</div>
									)
								},
							)
						}

						return (
							<div>
								<a href={address}>{rout}</a>
							</div>
						)
					})}
				</>
			)
		case LOGIN:
			return <Login />

		case REGISTRATION:
			return <Registary />

		case ERROR_SERVER:
			return <ErrorPages code="500" text="Мы уже фиксим" />

		case PROFILE.PROFILE:
			return <Profile />

		case PROFILE.CHANGE_PASSWORD:
			return <ChangePassword />

		case CHATS:
			return <ErrorPages text="Будет позже" />

		default:
			return <ErrorPages code="404" text="Не туда попали" />
	}
}

export default AppRoutes
