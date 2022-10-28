import {useState} from 'react';
import Calendar from 'react-calendar';
import Time from './Time.js'
import {Link} from 'react-router-dom';

function Kalenteri3() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 

 return (
 <div className='kalenteri3'>
  <br/>
   <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   </div>

   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Valittu päivämäärä on:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>


						<Link to="/sivu2"><h1>Luo treeni</h1></Link>


 </div>

  )
}

export default Kalenteri3;