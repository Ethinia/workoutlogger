import {useState} from 'react';
import useAction from '../hooks/useAction';
import useAppState from '../hooks/useAppState';
import Lista from './Lista';
import RemoveLista from './RemoveLista';
import EditLista from './EditLista';

const TeeTreeniHaku = (props) => {

	const {list} = useAppState();

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
	
	const [haku,setHaku] = useState({
		treenipaiva:""
	})

	const onChange = (event) => {
		setHaku((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}

	let items = list.filter(treeni => treeni.paiva === haku.treenipaiva ).map((item,index) => {
		if(state.editIndex === index) {
			return <EditLista key={item.id} item={item} editItem={editItem} changeMode={changeMode}/>
		}		
		if(state.removeIndex === index) {
			return <RemoveLista key={item.id} item={item} changeMode={changeMode} removeItem={removeItem}/>
		}
		return <Lista key={item.id} item={item} index={index} changeMode={changeMode}/>
	})
	
	return(
		<div>
			<form className="mb-3"
			style={{
				backgroundColor:"grey",
				width:"500px",
				margin:"auto",
				
			}}>
			<label htmlFor="treenipaiva" className="form-label">Pick a date to search for your workouts</label>
				<input type="date"
						name="treenipaiva"
						id="treenipaiva"
						className="form-control"
						value={haku.treenipaiva}
						onChange={onChange}/>
			</form>

			<table 
			className="table table-striped"
			style={{
				margin:"auto",
				width:"80vw"
			}}
			>
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