import {useEffect} from "react";
import { Navigate, useParams } from "react-router-dom"
import Button from "../../components/Button/Button"
import Heading from "../../components/Heading/Heading";
import "./BuildPage.css"


export const BuildForOutletPage = () => {

	const {
		id
	} = useParams();
	

	let title = "";
	let text = "";
	let colorContentClass = null;

	switch (id) {
		case "advertisements":
			title = "Мои объявления";
			text = "Мои объявления";
			colorContentClass = "inner-page__content--advertisements";
			break;
		case "orders":
			title = "Заказы и заявки";
			text = "Заказы и заявки";
			colorContentClass = "inner-page__content--orders";
			break;
		case "reviews":
			title = "Мои отзывы";
			text = "Мои отзывы";
			colorContentClass = "inner-page__content--reviews";
			break;

		case "favorites":
			title = "Избранное";
			text = "Избранное";
			colorContentClass = "inner-page__content--favorites";
			break;
		case "something":
			title = "Ещё что-то...";
			text = "Ещё что-то...";
			colorContentClass = "inner-page__content--something";
			break;
		case "messenger":
			title = "Сообщения";
			text = "Сообщения";
			colorContentClass = "inner-page__content--messenger";
			break;
		default:
			title = "Нет такой страницы!";
			text = "Такой страницы нe существует!";
			break;
	}
		
	useEffect(() => {
		document.title = title
	}, [title]);


	if (text === "Такой страницы нe существует!") {
				return (<Navigate to="/not-found" replace /> )
	} 

	if (text !== "") {
			return (
				<div className="inner-page">
					<div className="inner-page-wrapper">
						
						<Heading
							className="inner-page__title"
							text={text} />

						<div className={`${colorContentClass}  inner-page__content`}></div>
					</div>
				</div>
			)
	}
}

export function BuildForExternalPage () {

	const {
		id
	} = useParams();

	let title = "";
	let text = "";


	switch (id) {
		case "transport":
			title = "Транспорт и запчасти";
			text = "Транспорт и запчасти в Москве";
			break;
		case "nedvizhimost":
			title = "Недвижимость";
			text = "Недвижимость в Москве";
			break;
		case "rabota":
			title = "Работа";
			text = "Работа в Москве";
			break;
		case "business":
			title = "Бизнес на Авито";
			text = "Ведите бизнес на Авито";
			break;

		case "career":
			title = "Команда Авито";
			text = "Станьте частью команды Авито";
			break;
		case "support":
			title = "Помощь";
			text = "Ответы на популярные вопросы";
			break;
		case "cart":
			title = "Корзина";
			text = "В корзине пусто";
			break;
		default:
			title = "Нет такой страницы!";
			text = "Такой страницы нe существует!";
			break;
	}

	useEffect(() => {
		document.title = title
	}, [title]);


	if (text === "Такой страницы нe существует!") {
			return (<Navigate to="/not-found" replace />)
	} 

	if (text !== "") {
		return (
					<>
						<div className="page-wrapper">
							<div className="container">
								<div className="page-content">
									<div className="page-content__inner">
										<Button
											className="btn--avito" />

										<Heading
											className="page-title"
											text={text} />
										
									</div>
								</div>
							</div>
						</div>
					</>
				)
	}
}

