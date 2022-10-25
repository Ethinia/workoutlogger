import React, { useState, useEffect } from 'react';


const TaukoTimer = () => {
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
	
	return(
		<div>
			<h2>{state.seconds}</h2>
		</div>
	)
}

export default TaukoTimer;