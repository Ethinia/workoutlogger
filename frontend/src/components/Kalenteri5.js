import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Link} from 'react-router-dom';
import useAction from '../hooks/useAction';

const Kalenteri5 = (props) => {

    //const {add} = useAction();
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return(
        
        

        <div>
            <Calendar showWeekNumbers onChange={onChange} value={date}/>
            {console.log(date)}
            <Link to='/Doingworkoutcard'>
                <button>{date.toString()}Valitse tämä</button>
                
              
            </Link>
            
        </div>
       
    );
    
};



export default Kalenteri5;