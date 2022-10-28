import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';


const Taukobutton = () => {

    let [state,setState] = useState({
        seconds:0,
        timer:0
    })
    
    const startTimer = () => {
        setState((state) => {
            return {
                ...state,
                seconds:state.seconds+1
            }
        })
    }

    
    useEffect(() => {
        let interval = setInterval(startTimer,1000);
        setState((state) => {
            return {
                ...state,
                timer:interval
            }
        })
        
        return () => clearInterval(interval);
    },[]);

    const ResetTimer = () => {
        setState((state) => {
            return {
                ...state,
                seconds:0
            }
        })
    }
    
/*
    const BreakOver = () => {
        alert('tauko ohi')
    }
*/
    const breakToggle = () => {
        ResetTimer();
        //BreakOver();
    }
    
    



    return(
        <div>

        <Button 
        onClick={breakToggle}
        variant="primary"
        style={{
            width:320,
            margin: 20,
            borderRadius:50,
            borderColor:'rgba(0,0,0,1)',
        }}
        ><h1>Break button {state.seconds}</h1></Button>
        </div>
        
    )
    
}





export default Taukobutton;