//import {useState} from 'react';
//import useAction from '../hooks/useAction';
import useAppState from '../hooks/useAppState';
//import Doingworkout from './Doingworkout';
import Lista from './Lista';

const TeeTreeniTesti = (props) => {

    
	const {list} = useAppState();

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

	let items = list.map((item) => {

		return <Lista key={item.id} item={item}/>
	})
	
	return(
		<table className="table table-striped">
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