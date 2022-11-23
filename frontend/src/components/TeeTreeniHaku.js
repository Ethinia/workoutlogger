//import {useState} from 'react';
//import useAction from '../hooks/useAction';
import useAppState from '../hooks/useAppState';
//import Doingworkout from './Doingworkout';
import Lista from './Lista';
//import {useEffect} from 'react';
import React, {useState} from "react";

const TeeTreeniHaku = (props) => {
    const {list} = useAppState();


    /*
    const {getTreeni} = useAction();
	
    useEffect(() => {
		
        getTreeni();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
*/

    /*
	const {remove,edit} = useAction();
	
	const [state,setState] = useState({
		removeIndex:-1,
		editIndex:-1
	})

	
	const changeMode = (mode,index) => {
		if(mode === "remove") {
			setState({
				removeIndex:index,
				editIndex:-1
			})
		}
		if(mode === "edit") {
			setState({
				removeIndex:-1,
				editIndex:index
			})
		}
		if(mode === "cancel") {
			setState({
				removeIndex:-1,
				editIndex:-1
			})
		}
	}
	
	const removeItem = (id) => {
		remove(id);
		changeMode("cancel");
	}
	
	const editItem = (item) => {
		edit(item);
		changeMode("cancel");
	}
	
    */

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

		return <Lista key={item.id} item={item}/>
	})
	

	/*
	let items = list.map((item) => {

		return <Lista key={item.id} item={item}/>
	})
	*/
	
	return(
		<div>
	
			<form className="mb-3"
			style={{
				backgroundColor:"grey",
				width:"500px",
				margin:"auto"
			}}>
			<label htmlFor="treenipaiva" className="form-label">Pick a date to search for your workouts</label>
				<input type="date"
						name="treenipaiva"
						id="treenipaiva"
						className="form-control"
						value={state.treenipaiva}
						onChange={onChange}
						/>
			
			</form>

			<table className="table table-striped"
			style={{
				"width":"1200px",
				"margin":"auto"
			}}>
				<thead>
					<tr>
						
						<th>Movement</th>
						<th>Date</th>
						<th>Weight</th>
						<th>Sets</th>
						<th>Reps</th>
					</tr>
				</thead>
				<tbody>
				{items}
				</tbody>
			</table>
		</div>
	)
}
export default TeeTreeniHaku;