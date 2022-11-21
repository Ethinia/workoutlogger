import Card from 'react-bootstrap/Card';
import Buttons from "./Buttons";
import React from 'react';


const UusiKortti = (props) =>{

return (
    <Card style={{ 
      backgroundColor: "grey",
      width: '32rem',
      height:'11rem' }}>
      <Card.Body>
      <td>{props.item.paiva}</td>
              <Card.Title style={{ 
                  margin:10,
                  justifyContent: 'left',
                  alignItems: 'left',
                  display: "flex"
                      }}>

			<td style={{ 
                  margin:10,
                  justifyContent: 'left',
                  alignItems: 'left',
                  display: "flex"
                      }}>{props.item.name}</td>
            <td style={{ 
                  margin:10,
                  justifyContent: 'left',
                  alignItems: 'left',
                  display: "flex"
                      }}>{props.item.weight} Kg</td>
			<td style={{ 
                  margin:10,
                  justifyContent: 'left',
                  alignItems: 'left',
                  display: "flex"
                      }}>{props.item.sarjat} Sets</td>
            <td style={{ 
                  margin:10,
                  justifyContent: 'left',
                  alignItems: 'left',
                  display: "flex"
                      }}>{props.item.toistot} Reps</td>
              </Card.Title>
                  <Card.Text>
                      <Buttons item = {props.item.sarjat}/>
                  </Card.Text>
                  
      </Card.Body>
    </Card>
    
  );
}

export default UusiKortti;