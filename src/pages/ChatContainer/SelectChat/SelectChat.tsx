/** @jsx DOMcreateElement */
import { DOMcreateElement } from 'jsxFactory'
import S from './SelectChat.module.scss'
import Divider from '../../../components/Divider/Divider'
import SvgField from '../../../components/SvgField/SvgField'
import clip from 'bundle-text:../../../assets/icons/clip.svg'
import arrowRight from 'bundle-text:../../../assets/icons/rightArrow.svg'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
const SelectChat = () => {
	const selectChat = false

	if (selectChat) {
		return (
			<div className={S.containerChatStub}>
				<p>Выберите чат чтобы отправить сообщение</p>
			</div>
		)
	}

	return (
		<div className={S.containerChat}>
			<div className={S.headerContainer}>
				<div className={S.userBlock}>
					<div className={S.avatar} />
					<p className={S.userName}>Матвей</p>
				</div>
				<div className={S.headerMenu}>
					<div className={S.dotted} />
					<div className={S.dotted} />
					<div className={S.dotted} />
				</div>
			</div>
			<Divider />
			<div className={S.messages}></div>
			<Divider />
			<div className={S.footer}>
				<SvgField className={S.inputCLip} src={clip} />
				<Input
					className={S.inputTextMessage}
					type="text"
					placeHolder="Сообщение"
					name="message"
				/>
				<Button type="blue" className={S.footerButton}>
					<SvgField src={arrowRight} />
				</Button>
			</div>
		</div>
	)
}

export default SelectChat
