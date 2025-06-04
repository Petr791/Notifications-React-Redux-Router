import React, { useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux"
import Heading from "../../components/Heading/Heading";
import "./NotificationsPage.css"
import {
	loadList,
	updateStatus,
} from "./actions"
import { 
	getNotifications,
	getNotificationsIsLoading,
	getNotificationsIsError,
} from "./selectors"

const mapStateToProps = state => ({
	data: state.notifications.notificationsValue,
});

const title = "Уведомления";


function NotificationsPage() {

	let notifications = useSelector(getNotifications);
	let isNotificationsLoading = useSelector(getNotificationsIsLoading);
	let isNotificationsError = useSelector(getNotificationsIsError);

	const dispatch = useDispatch();

	useEffect(() => {
		if (notifications === null) {
			 dispatch(loadList());
		}
  }, [notifications, dispatch]);

	
	useEffect(() => {
		document.title = title
	}, []);

		////////////////////

	function handleNotificationsItemClick (id) {
		//console.log(id);
		const statusV = true;
		dispatch(updateStatus(id, statusV)); 
	}

 	const myData = { 
			className:"notifications-list",
			notifications:notifications,
			isNotificationsLoading:isNotificationsLoading,
			isNotificationsError:isNotificationsError,
			onClick:()=>handleNotificationsItemClick(event.target.closest('li').id)
	};



	return (
	 	<div className="inner-page notifications-page">
			<div className="inner-page-wrapper">

				<Heading
					className="inner-page__title"
					text="Уведомления" />

				<Outlet
					context={[myData]} />

			</div>
		</div>	
	 
 
	)
}

export default connect(mapStateToProps) (NotificationsPage)
