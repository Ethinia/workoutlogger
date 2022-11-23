//import Doingworkoutcard from "./Doingworkoutcard";
import SaveWorkout from "./SaveWorkout";
import {Link} from 'react-router-dom';
import Taukobutton from "./Taukobutton";
import useAppState from '../hooks/useAppState';
import UusiKortti from "./UusiKortti";
<<<<<<< HEAD
=======
import React, {useState} from "react";
>>>>>>> eecac03f7c2afbdf0147f73e61ddbedf5e11e664

const Doingworkout = (props) => {
    
    const {list} = useAppState();
<<<<<<< HEAD
    
    let items = list.map((item) => {

		return (
        <div>
        <UusiKortti key={item.id} item={item}/>
        <br/>
        </div>
        )
	})
=======

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

	//let treenipaiva = "2022-11-09"

	let items = list.filter(treeni => treeni.paiva === state.treenipaiva ).map((item) => {

		return <UusiKortti key={item.id} item={item}/>
	})
	
>>>>>>> eecac03f7c2afbdf0147f73e61ddbedf5e11e664
    
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
        
        <br/>

        <Taukobutton/>


        <Link to="/WorkoutFinished"><SaveWorkout/></Link>
        
        
        </div>
    )
}


export default Doingworkout;