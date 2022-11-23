import Button from 'react-bootstrap/Button';
import React from 'react';

const SaveWorkout = () => {
    let teksti = "Save workout"
    return(
    <Button 
        variant="danger"
        style={{
            margin: 20,
            borderRadius:50,
            borderColor:'rgba(0,0,0,1)',
        }}
        >{teksti}</Button>)            
}

export default SaveWorkout;