import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const PageNavbar = () => {
	
	return (
		<Navbar sticky="top" className="navbar navbar-expand-lg navbar-light bg-dark">
			<ul className="navbar-nav">
				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/"><h2>WOLApp</h2></Link>
				</li>

				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/sivu2b"><h2>New workout</h2></Link>
				</li>

				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/Doingworkout"><h2>Do workout</h2></Link>
				</li>

				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/TeeTreeniTesti"><h2>History</h2></Link>
				</li>

				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/TeeTreeniHaku"><h2>Search</h2></Link>
				</li>

			</ul>		
		</Navbar>
	)
}

export default PageNavbar;