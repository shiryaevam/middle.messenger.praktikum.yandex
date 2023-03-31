/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement, DOMcreateFragment } from 'jsxFactory'
import S from './ChatList.module.scss'
import Link from '../../../components/Link/Link'
import Routes from '../../AppRoutes/Routes'
import iconLink from 'bundle-text:../../../assets/icons/arrow.svg'
import SvgField from '../../../components/SvgField/SvgField'
import { Input2 } from '../../../components/Input/Input'
import Divider from '../../../components/Divider/Divider'
import smock from '../../../utils/smock/smock'
import getRandomInt from '../../../utils/random/random'
const ChatList = () => {
	const Search = new Input2({
		value: '',
		placeHolder: 'Поиск',
		type: 'text',
	})

	return (
		<div className={S.container}>
			<Link className={S.Link} to={Routes.PROFILE.PROFILE}>
				Профиль <SvgField src={iconLink} />
			</Link>
			<Search />
			<Divider />
			{smock.CHAT_LIST.map((elChat) => {
				const { avatar, name, lastMessage, unreadMessage } = elChat

				return (
					<>
						<div className={S.contact}>
							{!avatar ? <img alt={avatar} /> : <div className={S.avatar} />}
							<div className={S.contactMainInformation}>
								<p className={S.contactName}>{name}</p>
								<p className={S.lastMessage}>{lastMessage}</p>
							</div>
							<div className={S.lastDateMessageAndUnread}>
								<p>
									{new Date(getRandomInt(10001111111111)).getHours()}:
									{new Date(getRandomInt(10001111111111)).getMinutes()}
								</p>
								<p>{unreadMessage}</p>
							</div>
						</div>
						<Divider />
					</>
				)
			})}
		</div>
	)
}
export default ChatList
