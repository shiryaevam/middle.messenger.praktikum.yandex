/** @jsx DOMcreateElement */
import { DOMcreateElement } from 'jsxFactory'
import S from './SelectChat.module.scss'
import Divider from '../../../components/Divider/Divider'
import SvgField from '../../../components/SvgField/SvgField'
import clip from 'bundle-text:../../../assets/icons/clip.svg'
import arrowRight from 'bundle-text:../../../assets/icons/rightArrow.svg'
import { Input2 } from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { useValidatorForms } from '../../../utils/hook/useValidatorForms'
const SelectChat = () => {
	const onSubmit = (e: Event) => {
		e.preventDefault()
		const forms = document.getElementById('sendChat')
		if (!!forms) {
			const formData = new FormData(forms as HTMLFormElement)
			const message = formData.get('message')
			const allForm = {
				message,
			}
			console.log('allForm', allForm)

			const { errors } = useValidatorForms(allForm)

			console.log('errorForms', errors)
		}
	}

	const selectChat = false

	if (selectChat) {
		return (
			<div className={S.containerChatStub}>
				<p>Выберите чат чтобы отправить сообщение</p>
			</div>
		)
	}

	const Message = new Input2({
		value: '',
		type: 'text',
		placeHolder: 'Сообщение',
		name: 'message',
		className: S.inputTextMessage,
	})

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
			<form className={S.footer} id="sendChat">
				<SvgField className={S.inputCLip} src={clip} />
				<Message />
				<Button
					type="submit"
					onClick={onSubmit}
					variant="blue"
					className={S.footerButton}
				>
					<SvgField src={arrowRight} />
				</Button>
			</form>
		</div>
	)
}

export default SelectChat
