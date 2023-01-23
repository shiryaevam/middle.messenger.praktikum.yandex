/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement, DOMcreateFragment } from 'jsxFactory'
import Routes from './Routes'
import ErrorPages from '../ErrorPages/ErrorPages'
import Login from '../Login/Login'
import '../index.scss'

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
			return (
				<div>
					<p>REGISTRATION</p>
				</div>
			)
		case ERROR_SERVER:
			return <ErrorPages code="500" text="Мы уже фиксим" />
		case PROFILE.PROFILE:
			return (
				<div>
					<p>PROFILE</p>
				</div>
			)
		case PROFILE.CHANGE_PASSWORD:
			return (
				<div>
					<p>CHANGE_PASSWORD</p>
				</div>
			)
		case CHATS:
			return <ErrorPages text="Будет позже" />

		default:
			return <ErrorPages code="404" text="Не туда попали" />
	}
}

export default AppRoutes
