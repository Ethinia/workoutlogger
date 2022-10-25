import {Link} from 'react-router-dom';


const Sivu2 = () => {
return(
    <div>
        <h2>Tämä on sivu kaksi missä luodaan reeni</h2>
        <li className="nav-item">
						<Link to="/Doingworkout">Tee treeni</Link>
		</li>
    </div>
)
}

export default Sivu2;