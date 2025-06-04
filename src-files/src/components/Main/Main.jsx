import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import "./Main.css"

function Main() {

	return (

		<>
			<main className="main">
				<div className="container">
					<div className="main-wrapper">
						<Sidebar />
						<div className="outlet-wrapper">
		 					<Outlet />
		 				</div>
					</div>
				</div>
			</main>
		
		</>
	)

}

export default Main
