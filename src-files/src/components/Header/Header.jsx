import List from "../List/List"
import "./Header.css"

function Header() {

	return (

		<>
					<header>
						<div className="top-menu">
							<div className="container">
								<div className="top-menu-inner">
									<div className="menu-left">
										<List
											className="menu-left__list" />
									</div>
									<div className="menu-right">
											<List
												className="menu-right__list" />
									</div>
								</div>
							</div>
						</div>

				<div className="container">
					<div className="bottom-menu">
						<List
							className="menu-bottom__list" />
						</div>
					</div>
			</header>
		
		</>
	)

}

export default Header
