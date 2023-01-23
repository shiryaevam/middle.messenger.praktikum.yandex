/** @jsx DOMcreateElement */
/** @jsxFrag DOMcreateFragment */
import { DOMcreateElement } from 'jsxFactory'
import styles from './ErrorPages.module.scss'

const ErrorPages = ({
	code,
	text = 'упс...',
}: {
	code?: string
	text?: string
}) => {
	const RETURN_TEXT = 'Вернуться назад'

	return (
		<div className="wrapperPage">
			<div className={`${styles.container} boxShadow`}>
				<div className={styles.containerTextCode}>
					<p>{code ? code : ''}</p>
					<p>{text ? text : ''}</p>
				</div>
				<a href="/">{RETURN_TEXT}</a>
			</div>
		</div>
	)
}
export default ErrorPages
