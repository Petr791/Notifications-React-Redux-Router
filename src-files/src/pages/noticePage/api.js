import {
	client
} from "../../api/client"

export const API = {

	getNotice: function (id) {
		return client.get(`/api/notifications/recommendation/${id}`);
	}

}