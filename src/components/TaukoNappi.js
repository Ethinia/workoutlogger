import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TaukoTimer from "./TaukoTimer";
import Nappi from './Nappi';

const TaukoNappi = () => {

    const [isToggled, setIsToggled] = useState(false);

    const startBreak = () => {
        setIsToggled(
            current => !current,
             ) 

    }

   /* const breakToggle = () => {
        startBreak();
        TaukoTimer();

    }
    */

    const TaukoPaalle = () => {

        return(
            <TaukoTimer/>
        )
    }
    return(
    <div>
        <TaukoTimer/>
    <Button 
    onClick={startBreak}
    variant="warning"
    style={{
        margin: 20,
        borderRadius:50,
        borderColor:'rgba(0,0,0,1)',
        backgroundColor: isToggled ? 'green' : '',
        color: isToggled ? 'white' : '',
    }}
    ><TaukoTimer/></Button>
    <Nappi onClick={TaukoPaalle}></Nappi>
    <TaukoPaalle/>
        </div>)
}


export default TaukoNappi;