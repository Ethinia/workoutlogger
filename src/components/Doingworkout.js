// TÄMÄ ON VANHA VERSIO JONKA VOI ARKISTOIDA. Nykyinen toimiva on Buttons & Nappi yhdistelmä.

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';



const Doingworkout = () => {
    let setAmount = 5;

    const [isToggled, setIsToggled] = useState(false);

    const changeColor = (id) => {
        id.preventDefault();
        setIsToggled(
            current => !current,
             ) 

    }

   /* const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
*/
const Nappi = () => {
    return(
    <Button 
        variant="warning"
        style={{
            margin: 20,
            borderRadius:50,
            borderColor:'rgba(0,0,0,1)',
            backgroundColor: isToggled ? 'green' : '',
            color: isToggled ? 'white' : '',
        }}
        onClick={changeColor}
        >5</Button>)
}


// CONDITIONAL RENDERING

let tempRender = <h2>Input error in amount of sets. Give a value between 1-5</h2>
    if(setAmount === 1) {
        tempRender = 
        <div>
        <Nappi/>
        </div>
    }

    if(setAmount === 2) {
        tempRender = 
        <div>
        <Nappi/>
        <Nappi/>
        </div>
    }

    if(setAmount === 3) {
        tempRender = 
        <div>
        <Nappi/>
        <Nappi/>
        <Nappi/>
        </div>
    }

	if(setAmount === 4) {
		tempRender = 
        <div>
        <Nappi/>
        <Nappi/>
        <Nappi/>
        <Nappi/>
        </div>

	}
    if(setAmount === 5) {
		tempRender = 
        <div>
        <Nappi/>
        <Nappi/>
        <Nappi/>
        <Nappi/>
        <Nappi/>
        </div>

	}
return(
    <div>
        {tempRender}
    </div>
)

}

export default Doingworkout;