import { Link } from "react-router-dom";


function Message({className, errorStatusText, title, text, linkPath}) {


	if (className === "error-page") {
		return (

				<div>
					<div className={className}>
						<h1>{title}</h1>
						<p>{text}</p>
						<p>Детали ошибки: {errorStatusText}</p>
						<p>
						<Link to={linkPath}>Вернуться на главную</Link>
						</p>
					</div>
				</div>
		)
	}

}

export default Message
