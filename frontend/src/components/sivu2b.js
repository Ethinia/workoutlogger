import useAction from '../hooks/useAction';
import {Link} from 'react-router-dom';
import React, {useState} from "react";

const Sivu2b = (props) => {

	const {add} = useAction();
	
	const [state,setState] = useState({
        liikeID:0,
        name:"",
        paiva:"",
        weight:0,
        sarjat:0,
        toistot:0
	})
	/*
	const Pena = () => {
		state.name="Penkki", 
		state.liikeID=1
	}
	
	const readLiike = () => {
		var e = document.getElementById("Liike");
		feedArray = e.value.split(",");
		setState.liikeID(feedArray[0]);
		setState.name(feedArray[1]);
	}
	*/
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
            paiva:"",
            weight:0,
            sarjat:0,
            toistot:0
		})
	}
	return(
		<div style={{
			margin:"auto"
		}}>
			<br/>
			<body style={{
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
			
				<label htmlFor="name" className="form-label">Valitse Liike</label>
				<select name="name" id="name" value={state.name} onChange={onChange}>
						<option>Penkkipunnerrus</option>
						<option>Vinopenkki</option>
						<option>Dippi</option>
						<option>Pystypunnerrus</option>
						<option>Vipunosto sivulle</option>
						<option>Ranskalainen punnerrus</option>
					</select>
					<select name="name" id="name" value={state.name} onChange={onChange}>
						<option>Maastaveto</option>
						<option>Leuanveto</option>
						<option>Kulmasoutu</option>
						<option>Ylätalja</option>
						<option>Hauiskääntö</option>
						<option>HammerCurl</option>
					</select>
					<select name="name" id="name" value={state.name} onChange={onChange}>
						<option>Takakyykky</option>
						<option>Etukyykky</option>
						<option>Hyvää huomenta</option>
						<option>Pohjenousu</option>
						<option>Tempaus</option>
						<option>Rinnalleveto</option>
					</select>
				<input type="text"
						name="name"
						id="name"
						className="form-control"
						value={state.name}
						onChange={onChange}/>

				<label htmlFor="paiva" className="form-label">paiva</label>
				<input type="date"
						name="paiva"
						id="paiva"
						className="form-control"
						value={state.paiva}
						onChange={onChange}
						/>

				<label htmlFor="weight" className="form-label">Weight</label>
				<input type="number"
						name="weight"
						id="weigth"
						className="form-control"
						step="0.25"
						value={state.weight}
						onChange={onChange}/>

				<label htmlFor="sarjat" className="form-label">Number of sets</label>
				<input type="number"
						name="sarjat"
						id="sarjat"
						className="form-control"
						value={state.sarjat}
						onChange={onChange}/>

                <label htmlFor="toistot" className="form-label">Number of reps</label>
				<input type="number"
						name="toistot"
						id="toistot"
						className="form-control"
						value={state.toistot}
						onChange={onChange}/>

				<input type="submit" className="btn btn-primary" value="Add"/>
			</form>
			<Link to="/Doingworkout"><h1>Tee treeni</h1></Link>
			<Link to="/Doingworkoutcard"><h1>Treenikortti</h1></Link>
			<Link to="/TeeTreeniTesti"><h1>Treeni testi</h1></Link>
			</body>
		</div>
	)
}

export default Sivu2b;


/*
<label htmlFor="liikeID" className="form-label">liikeID</label>
				<input type="number"
						name="liikeID"
						id="liikeID"
						className="form-control"
						value={state.liikeID}
						onChange={onChange}/>


<label htmlFor="liikeID" className="form-label">liikeID</label>
				<input type="number"
						name="liikeID"
						id="liikeID"
						className="form-control"
						value={state.liikeID}
						onChange={onChange}/>



<label>ValitseLiike:</label>
				<h2>{"state.value"}</h2>
				<div>
				<select value={state.name} htmlFor="liikeID" className="container" onChange={e=>setState(e.target.value)}>
					<optgroup label='Puskevat'>
						<option value="">1:Pena</option>
						<option value="Dippi">2:Dippi</option>
						<option value="Pystypunnerrus">3:Pystäri</option>
						<option value="Vipunosto">4:Vipari</option>
						</optgroup>
					</select>
					</div>
					<div>
					<select htmlFor="liikeID" className="container">
						<option value="">1:Pena</option>
						<option value="Dippi">2:Dippi</option>
						<option value="Pystypunnerrus">3:Pystäri</option>
						<option value="Vipunosto">4:Vipari</option>
					</select>
					</div>
					<input type="text"
						name="name"
						id="name"
						className="form-control"
						value={state.name}
						onChange={setState}/>
						
						<label for="myFruit">What's your favorite fruit?</label>
				<input type="text" name="name" id="name" list="mySuggestion" />
				<datalist id="mySuggestion">
				<option>Apple</option>
				<option>Banana</option>
				<option>Blackberry</option>
				<option>Blueberry</option>
				<option>Lemon</option>
				<option>Lychee</option>
				<option>Peach</option>
				<option>Pear</option>
				</datalist>

						*/