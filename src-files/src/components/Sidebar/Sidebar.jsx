import  "./Sidebar.css"
import List from "../List/List";

function Sidebar() {
	return (
			<div className="sidebar">
				<div className="sidebar-inner">
					<div className="sidebar-box">
						<div className="sidebar-avatar-wrapper">
							<div className="sidebar-avatar__image">
							</div>
						</div>
						<p className="sidebar__name">Имя</p>
					</div>
					<List
						className='sidebar-list' />
				</div>
			</div>
	);
}

export default Sidebar