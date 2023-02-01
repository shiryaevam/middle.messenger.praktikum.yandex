/** @jsx DOMcreateElement */
import { DOMcreateElement } from 'jsxFactory'

import S from './ChatContainer.module.scss'
import ChatList from './ChatList/ChatList'

const ChatContainer = () => {
	return (
		<main className={S.container}>
			<ChatList />
			<div className={S.containerChat}>Chat</div>
		</main>
	)
}

export default ChatContainer
