import SaveWorkout from "./SaveWorkout";
import {Link} from 'react-router-dom';
import Taukobutton from "./Taukobutton";
import useAppState from '../hooks/useAppState';
import UusiKortti from "./UusiKortti";
import React, {useState} from "react";

const Doingworkout = (props) => {
    
    const {list} = useAppState();

    const [state,setState] = useState({
		treenipaiva:""
	})

	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}

	let items = list.filter(treeni => treeni.paiva === state.treenipaiva ).map((item) => {

		return (
		<div>
		<UusiKortti key={item.id} item={item}/>
			<br/>
		</div>
		)
	})
	
    return(
        <div>
            <form className="mb-3"
			style={{
				backgroundColor:"grey",
				width:"500px",
				margin:"auto"
			}}>
			<label htmlFor="treenipaiva" className="form-label">Pick a date to do that days workout</label>
				<input type="date"
						name="treenipaiva"
						id="treenipaiva"
						className="form-control"
						value={state.treenipaiva}
						onChange={onChange}
						/>
			
			</form>
        <br/>
        {items}
        <br/>
        <br/>    
        <br/>
        <Taukobutton/>

        <Link to="/WorkoutFinished"><SaveWorkout/></Link>
        
        </div>
    )
}


export default Doingworkout;