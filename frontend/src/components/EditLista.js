import {useState} from 'react';

const EditLista = (props) => {
	
	const [state,setState] = useState({
        liikeID:props.item.liikeID,
        name:props.item.name,
        paiva:props.item.paiva,
        weight:props.item.weight,
        sarjat:props.item.sarjat,
        toistot:props.item.toistot
	})
	
	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const editItem = () => {
		let item = {
			...state,
			id:props.item.id
		}
		props.editItem(item);
	}
	
	return(
		<tr>

				<td><input type="text"
						name="name"
						id="name"
						className="form-control"
						value={state.name}
						onChange={onChange}/></td>

				<td><input type="date"
						name="paiva"
						id="paiva"
						className="form-control"
						value={state.paiva}
						onChange={onChange}/></td>

				<td><input type="number"
						name="weight"
						id="weigth"
						className="form-control"
						step="0.25"
						value={state.weight}
						onChange={onChange}/></td>

				<td><input type="number"
						name="sarjat"
						id="sarjat"
						className="form-control"
						value={state.sarjat}
						onChange={onChange}/></td>

				<td><input type="number"
						name="toistot"
						id="toistot"
						className="form-control"
						value={state.toistot}
						onChange={onChange}/></td>

			<td><button className="btn btn-success" 
			onClick={editItem}>Save</button></td>
			<td><button className="btn btn-danger" 
			onClick={() => props.changeMode("cancel")}>Cancel</button></td>		
		</tr>
	)
}

export default EditLista;