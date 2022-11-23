const Lista = (props) => {
	
	return(
        <tr>
<<<<<<< HEAD
			<td>{props.item.liikeID}</td>
=======
			
>>>>>>> eecac03f7c2afbdf0147f73e61ddbedf5e11e664
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