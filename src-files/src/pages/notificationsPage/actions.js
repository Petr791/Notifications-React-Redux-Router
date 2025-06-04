import {
	NOTIFICATIONS_LOADING,
	NOTIFICATIONS_LOADING_SUCCESS,
	NOTIFICATIONS_LOADING_ERROR,
	CHANGE_STATUS,

} from "./constants";

import {
	API
} from "./api"

export const loadList = () => {
	return (dispatch) => {

		dispatch({
			type: NOTIFICATIONS_LOADING
		});

		API.getNotifications()
			.then(data => {
				if (data.data.status !== "success") {
					console.log("Статус данных: " + data.data.status);
					dispatch({
						type: NOTIFICATIONS_LOADING_ERROR
					});
				}

				const notifications = data.data.data.notifications;
				dispatch({
					type: NOTIFICATIONS_LOADING_SUCCESS,
					payload: notifications
				});

			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: NOTIFICATIONS_LOADING_ERROR
				});
			})
	}
}


export function updateStatus(id, statusV) {

	return {
		type: CHANGE_STATUS,
		payload: {
			id,
			statusV
		},
	};
}