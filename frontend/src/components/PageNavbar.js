import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const PageNavbar = () => {
	
	return (
		<Navbar sticky="top" className="navbar navbar-expand-lg navbar-light bg-dark">
			<ul className="navbar-nav">
				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/"><h2>Etusivu</h2></Link>
				</li>

				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/sivu2b"><h2>Uusi treeni</h2></Link>
				</li>

				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/TeeTreeniTesti"><h2>Historia</h2></Link>
				</li>

			</ul>		
		</Navbar>
	)
}

export default PageNavbar;