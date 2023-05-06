/** @jsx DOMcreateElement */
import { DOMcreateElement } from 'jsxFactory'

import S from './ChatContainer.module.scss'
import ChatList from './ChatList/ChatList'
import SelectChat from './SelectChat/SelectChat'
const ChatContainer = () => (
	<main className={S.container}>
		<ChatList />
		<SelectChat />
	</main>
)

export default ChatContainer
