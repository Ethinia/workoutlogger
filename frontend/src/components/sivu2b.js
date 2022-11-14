import {useState} from 'react';
import useAction from '../hooks/useAction';
import {Link} from 'react-router-dom';

const Sivu2b = (props) => {

	const {add} = useAction();
	
	const [state,setState] = useState({
        liikeID:0,
        name:"",
        date:"",
        weight:0,
        sarjat:0,
        toistot:0
	})
	
	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		let liike = {
			...state
		}
		add(liike);
		setState({
            liikeID:0,
            name:"",
            date:"",
            weight:0,
            sarjat:0,
            toistot:0
		})
	}
	return(
		<div style={{
			backgroundColor:"grey",
			width:"500px",
			margin:"auto"
		}}>
			<form onSubmit={onSubmit} className="mb-3">

                <label htmlFor="liikeID" className="form-label">liikeID</label>
				<input type="number"
						name="liikeID"
						id="liikeID"
						className="form-control"
						value={state.liikeID}
						onChange={onChange}/>

				<label htmlFor="Name" className="form-label">Name</label>
				<input type="text"
						name="name"
						id="name"
						className="form-control"
						value={state.name}
						onChange={onChange}/>

				<label htmlFor="date" className="form-label">Date</label>
				<input type="text"
						name="date"
						id="date"
						className="form-control"
						value={state.date}
						onChange={onChange}/>

				<label htmlFor="weight" className="form-label">Weight</label>
				<input type="number"
						name="weight"
						id="weigth"
						className="form-control"
						step="0.01"
						value={state.weight}
						onChange={onChange}/>

				<label htmlFor="sarjat" className="form-label">Sarjat</label>
				<input type="number"
						name="sarjat"
						id="sarjat"
						className="form-control"
						value={state.sarjat}
						onChange={onChange}/>

                <label htmlFor="toistot" className="form-label">Toistot</label>
				<input type="number"
						name="toistot"
						id="toistot"
						className="form-control"
						value={state.toistot}
						onChange={onChange}/>

				<input type="submit" className="btn btn-primary" value="Add"/>
			</form>
			<Link to="/Doingworkout"><h1>Tee treeni</h1></Link>
		</div>
	)
}

export default Sivu2b;