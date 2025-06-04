import  { useEffect } from "react"
import Heading from "../../components/Heading/Heading";
import "./HomePage.css"

const title = "Главная";
const titlePage = "Главная страница";


export default function HomePage() {

	useEffect(() => {
		document.title = title
	}, []);


	return (
		<div className="inner-page">
				<div 
					className="main-header-wrapper">
						<Heading
							className="inner-page__title"
							text={titlePage} />	
				</div>

				<div className="inner-page__content inner-page__content--main"></div>
		</div>
	)
}