import { Link,  NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./List.css"

import {
	HeartSVG,
	BellSVG,
	MessageSVG,
	ShoppingCartSVG,
	AvitoLogoSVG,
	AvitoTextSVG
} from "../IconsSvg/IconsSvg"
import Preloader from "../Preloader/Preloader";



function List({className, notifications, isNotificationsLoading, isNotificationsError, onClick}) {

	const sidebarItems = [{
		title: "Мои объявления",
		page: "profile/advertisements"
	},
	{
		title: "Заказы",
		page: "profile/orders"
	},

	{
		title: "Мои отзывы",
		page: "profile/reviews"
	},
	{
		title: "Избранное",
		page: "profile/favorites"
	},
	{
		title: "Ещё что-то",
		page: "profile/something"
	},
	{
		title: "Уведомления",
		page: "profile/notifications"
	},
	];


	const bottomMenuItems = [
	{
		title: "Авто",
		page: "moskva/transport"
	},
	{
		title: "Недвижимость",
		page: "moskva/nedvizhimost"
	},
	{
		title: "Работа",
		page: "moskva/rabota"
	}
	]


	const leftMenuItems = [
	{
		title: "Для бизнеса",
		page: "business"
	},
	{
		title: "Карьера в Авито",
		page: "career"
	},
	{
		title: "Помощь",
		page: "support"
	}
	]


	const rightMenuItems = [
	{
		icon: <HeartSVG />,
		page: "profile/favorites"
	},
	{
		icon: <BellSVG />,
		page: "profile/notifications"
	},
	{
		icon: <MessageSVG />,
		page: "profile/messenger"
	},
	{
		icon: <ShoppingCartSVG />,
		page: "order/cart"
	}
	]

	function formatDate(milliseconds) {
		const date = new Date(milliseconds);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
	 
		const formattedMonth = month < 10 ? "0" + month : month;
		const formattedDay = day < 10 ? "0" + day : day;
		const formattedHours = hours < 10 ? "0" + hours : hours;
		const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	 
		const formattedDate = `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes}`;
		return formattedDate;
	 }



	if(className === "notifications-list") {
		return (
			<div className="notifications-list-wrapper visible">
	  
			     {(isNotificationsLoading) ? <Preloader /> : <>
										  {(isNotificationsError) ? <> <p className="message__loading-error">Ошибка загрузки уведомлений!</p> 
												  </> : 
													  <>
												  <ul className={className}>
													  {notifications && notifications.map((item)=> (
														  <li key={uuidv4()}  className="notifications-item"  id={item.id} onClick={onClick}>
															  <Link to={`/profile/notifications/recommendation/${item.id}`} >
															  
															  
															  <div className="notifications-item__inner">

																<div className="notifications-item__row">

																	{(item.isRead === true) && <h3 className="notifications-item__title read">{item.title}</h3>} 
																	{(item.isRead === false) && <h3 className="notifications-item__title">{item.title}</h3>} 

																	<time className="notifications-item__time" dateTime="2025-10-12">{formatDate(item.date)}</time>
																</div>

																<div className="notifications-item__row">
																		{(item.isRead === true) && <p className="notifications-item__text read">{item.description}</p>} 
																		{(item.isRead === false) && <p className="notifications-item__text">{item.description}</p>}

																		<div className="notifications-item__status-wrapper">

																			{(item.isRead === false) && <span className="notifications-item__status"></span>}

																		</div>
																</div>
																</div>
 
															  </Link>
														  </li>
														  
													  ))}
												  </ul>
												  
											  </>
									}
						</>}
			</div>
		
		  )
	}


	if(className === "sidebar-list") {
		return (
					<div className="sidebar-list-wrapper">
							<nav>
									<ul className={className}>
											{sidebarItems && sidebarItems.map((item)=> (
												<li key={uuidv4()}  className="sidebar-list__item">
													<NavLink to={`${item.page}`} className="sidebar-list__link">{item.title}</NavLink>
												</li>
											))}
										</ul>
							</nav> 
					</div>
		  )
	}

	if(className === "menu-bottom__list") {
		return (
			<>
				<nav>
						<ul className={className}>
								<li  className="menu-bottom__item menu-bottom__item--logo">
											<Link to={`/`} className="header-logo__link menu-bottom__link"><AvitoLogoSVG /><AvitoTextSVG /></Link>
								</li>
								<li className="menu-bottom__item ">
									<ul className="menu-bottom__link-list">
								{bottomMenuItems && bottomMenuItems.map((item)=> (
										<li key={uuidv4()}  className="menu-bottom__item">
											  <Link to={`${item.page}`} className="menu-bottom__link">{item.title}</Link>
										</li>
									  ))}
									  </ul>
								</li>	  
						</ul>
				</nav> 
			</>

		)
	}

	 if(className === "menu-left__list") {
		return (
					<>
						<nav>
							<ul className={className}>
								{leftMenuItems && leftMenuItems.map((item)=> (
									<li key={uuidv4()}  className="menu-left__item">
											<Link to={`${item.page}`} className="menu-left__link">{item.title}</Link>
									</li>
								))}
							</ul>
						</nav> 
					</>
		)
	}

	 if(className === "menu-right__list") {
		return (
				<>
					<nav>
						<ul className={className}>
							{rightMenuItems && rightMenuItems.map((item)=> (
								<li key={uuidv4()}  className="menu-right__item">
									<Link to={`${item.page}`} className="menu-right__link">{item.icon}</Link>
								</li>
							))}
						</ul>
					</nav>
				</>
		)
	}


}

export default List
