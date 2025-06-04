import {
	NOTICE_LOADING,
	NOTICE_LOADING_SUCCESS,
	NOTICE_LOADING_ERROR
} from "./constants";

import {
	API
} from "./api"

export const loadNotice = (id) => {
	return (dispatch) => {

		dispatch({
			type: NOTICE_LOADING,
			payload: null
		});

		API.getNotice(id)
			.then(data => {

				if (data.data.status !== "success") {
					console.log("Статус данных: " + data.data.status);
					dispatch({
						type: NOTICE_LOADING_ERROR
					});
				}

				const notices = data.data;

				dispatch({
					type: NOTICE_LOADING_SUCCESS,
					payload: notices
				});


			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: NOTICE_LOADING_ERROR
				});
			})
	}
}