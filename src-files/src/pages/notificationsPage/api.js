import {
	client
} from "../../api/client"

export const API = {

	getNotifications: function () {
		return client.get("/api/notifications");
	},
}