import {Link} from 'react-router-dom';

const Navbar = () => {
	
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/">Kalenteri</Link>
				</li>
				<li className="nav-item" style={{marginLeft:10}}>
					<Link to="/Historia">Historia</Link>
				</li>
			</ul>		
		</nav>
	)
}

export default Navbar;