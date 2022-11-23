const RemoveLista = (props) => {
	
	return(
        <tr>
			<td>{props.item.name}</td>
			<td>{props.item.paiva}</td>
            <td>{props.item.weight}</td>
			<td>{props.item.sarjat}</td>
            <td>{props.item.toistot}</td>
			<td><button className="btn btn-danger" 
			onClick={() => props.changeMode("cancel")}>Cancel</button></td>
			<td><button className="btn btn-success" 
			onClick={() => props.removeItem(props.item.id)}>Confirm</button></td>	
		</tr>
	)
}

export default RemoveLista;