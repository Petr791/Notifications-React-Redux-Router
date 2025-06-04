import {
	NOTIFICATIONS_LOADING,
	NOTIFICATIONS_LOADING_SUCCESS,
	NOTIFICATIONS_LOADING_ERROR,
	CHANGE_STATUS,
} from "./constants";



const initialState = {
	notificationsValue: null,
	isNotificationsLoading: false,
	isNotificationsError: false,
};


export function notificationsReducer(state = initialState, action) {

	switch (action.type) {

		case NOTIFICATIONS_LOADING:
			return {
				...state,
				isNotificationsLoading: true,
					isNotificationsError: false
			};

		case NOTIFICATIONS_LOADING_SUCCESS:

			return {
				...state,
				isNotificationsLoading: false,
					notificationsValue: action.payload
			};

		case NOTIFICATIONS_LOADING_ERROR:
			return {
				...state,
				isNotificationsLoading: false,
					isNotificationsError: true,
			};

		case CHANGE_STATUS:
			return {
				...state,
				notificationsValue: state.notificationsValue.map(item =>
					item.id === action.payload.id ? {
						...item,
						...item,
						isRead: action.payload.statusV
					} :
					item
				),
			};

		default:
			return {
				...state
			}
	}
}