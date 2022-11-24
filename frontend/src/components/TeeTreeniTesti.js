import {useState} from 'react';
import useAction from '../hooks/useAction';
import useAppState from '../hooks/useAppState';
import Lista from './Lista';
import RemoveLista from './RemoveLista';
import EditLista from './EditLista';

const TeeTreeniTesti = (props) => {

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
	
	let items = list.map((item,index) => {
		if(state.editIndex === index) {
			return <EditLista key={item.id} item={item} editItem={editItem} changeMode={changeMode}/>
		}		
		if(state.removeIndex === index) {
			return <RemoveLista key={item.id} item={item} changeMode={changeMode} removeItem={removeItem}/>
		}
		return <Lista key={item.id} item={item} index={index} changeMode={changeMode}/>
	})
	
	return(
		<table style={{
			margin:"auto",
			width:"80vw"
		}}
		className="table table-striped">
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
	)
}
export default TeeTreeniTesti;