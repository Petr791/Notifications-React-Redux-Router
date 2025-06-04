import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import Heading from "../../components/Heading/Heading"
import "./NotFoundPage.css"

const title = "Нет такой страницы!";
const textError = "Ошибка!";
const text = "Такой страницы нe существует!";
import "./NotFoundPage.css"

const NotFoundPage = () => {

	useEffect(() => {
		document.title = title;
	}, []);

	return (
			<>
				<Navigate to="/not-found" replace /> 
					<div className="page-wrapper">
						<div className="container">
							<div className="page-content-notfound">
								<div className="page-content__inner-notfound">

								<Heading 
								 className="page-title"
								 text={textError} />

								<Heading 
								 className="page-subtitle"
								 text={text} />

								<Button
									className="btn--avito" />
									
								</div>
							</div>
						</div>
					</div>
			</>
		)
 };

 export default NotFoundPage