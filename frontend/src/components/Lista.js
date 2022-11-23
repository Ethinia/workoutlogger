const Lista = (props) => {
	
	return(
        <tr>
			<td>{props.item.name}</td>
			<td>{props.item.paiva}</td>
            <td>{props.item.weight}</td>
			<td>{props.item.sarjat}</td>
            <td>{props.item.toistot}</td>
			<td><button className="btn btn-danger" 
			onClick={() => props.changeMode("remove",props.index)}>Remove</button></td>
			<td><button className="btn btn-secondary" 
			onClick={() => props.changeMode("edit",props.index)}>Edit</button></td>		
		</tr>
	)
}

export default Lista;