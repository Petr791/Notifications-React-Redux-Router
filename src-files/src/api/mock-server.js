import {
	createServer,
} from "miragejs";

import {
	notificationsArray
} from "../../public/notificationsData";
import {
	noticesData
} from "../../public/noticesData";


createServer({

	routes() {

		this.namespace = "/api";

		this.get("/notifications", () => {
			//return new Response(500);
			return {
				data: notificationsArray
			}
		})

		this.get("/notifications/recommendation/:id", (schema, request) => {

			const id = request.params.id;
			const item = noticesData[id];

			//return new Response(500);
			return {
				data: item
			}
		})
	},
})