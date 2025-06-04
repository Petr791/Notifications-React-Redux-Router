import { useOutletContext } from "react-router-dom"
import List from "../../components/List/List"
import "./NotificationsListPage.css"

export default function NotificationsList() {

	const [data] = useOutletContext();

	return (
					<>
						<List
							className={data.className}
							notifications={data.notifications}
							isNotificationsLoading={data.isNotificationsLoading}
							isNotificationsError={data.isNotificationsError}
							onClick={data.onClick} /> 
					</>
	)
}