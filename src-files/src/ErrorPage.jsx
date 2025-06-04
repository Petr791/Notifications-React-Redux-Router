import { useEffect } from "react"
import { useRouteError } from "react-router-dom";
import Message from "./components/Message/Message";

const title = 'Ошибка!';


export default function ErrorPage() {

  const error = useRouteError();
 
	useEffect(() => {
			document.title = {title};
	}, []);

  return (
	
				<Message
					className="error-page"
					title ="Ошибка!"
					text="Что-то пошло не так..."
					errorStatusText={error.statusText}
					linkPath="/" />
  )
}


