import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
//import TaukoAlert from './TaukoAlert';


const Taukobutton = () => {

    let [state,setState] = useState({
        seconds:0,
        timer:0
    })
    
    const startTimer = () => {
        setState((state) => {
            return {
                ...state,
                seconds:state.seconds+1,
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
    
    //const MINUTE_MS = 10000; 
     
    const TaukoAlert = () => {
        
        
        useEffect(() => {
            const interval = setInterval(() => {
                alert('Tauko ohi');
            }, 5000);
    
            return () => clearInterval(interval);
            }, )
            alert('I was clicked')
    
    }
    
   /*
    useEffect(() => {
        const interval = setInterval(() => {
            alert('huoh')
        }, MINUTE_MS);

        return () => clearInterval(interval);
        }, [])
        */

    /*
    useEffect(() => {
        setState((state) => {
            if(state.seconds === 50000);
            return (
                alert('tauko ohi')
            )
        })
    },[]);
    */
   
    /*
    useEffect(() => {
        
        if(state.seconds === 5000);
            return (
               alert('tauko ohi')
            )
    },[]);
    */


/*
    const BreakOver = () => {
        alert('tauko ohi')
    }
*/
    const breakToggle = () => {
        ResetTimer();
        TaukoAlert();
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