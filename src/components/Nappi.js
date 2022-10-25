import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Nappi = () => {
    let teksti = "5"
    const [isToggled, setIsToggled] = useState(false);

    const changeColor = () => {
        setIsToggled(
            current => !current,
             ) 

    }

    return(
    <Button 
        onClick={changeColor}
        variant="warning"
        style={{
            margin: 20,
            borderRadius:50,
            borderColor:'rgba(0,0,0,1)',
            backgroundColor: isToggled ? 'green' : '',
            color: isToggled ? 'white' : '',
        }}
        >{teksti}</Button>)
}

export default Nappi;