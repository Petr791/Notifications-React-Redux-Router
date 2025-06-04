import {
	NOTICE_LOADING,
	NOTICE_LOADING_SUCCESS,
	NOTICE_LOADING_ERROR
} from "./constants";


const initialState = {
	noticeValue: null,
	isNoticeLoading: false,
	isNoticeError: false,
};

export function noteReducer(state = initialState, action) {

	switch (action.type) {

		case NOTICE_LOADING:
			return {
				...state,
				isNoticeLoading: true,
					isNoticeError: false,
					noticeValue: null
			};

		case NOTICE_LOADING_SUCCESS:

			return {
				...state,
				isNoticeLoading: false,
					noticeValue: action.payload
			};

		case NOTICE_LOADING_ERROR:
			return {
				...state,
				isNoticeLoading: false,
					isNoticeError: true,
			};

		default:
			return {
				...state
			};
	}
}