import React, {useState} from "react";
import {render} from "react-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Link} from 'react-router-dom';
import App from "../App";

const Kalenteri5 = (props) => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    const [paiva, setPaiva] = useState();

    return(
        
        

        <div>
            <Calendar showWeekNumbers onChange={onChange} value={date}/>
            {console.log(date)}
            <Link to='Sivu2TeeWorkout'>
                <button onClick={()=>{props.setPaiva(date.toString())}}>{date.toString()}Valitse tämä</button>
                
                <button onClick={() => {}}>Valitse tämä päivä</button>
            </Link>
            
        </div>
       
    );
    
};



export default Kalenteri5;