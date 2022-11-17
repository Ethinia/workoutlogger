//import Doingworkoutcard from "./Doingworkoutcard";
import SaveWorkout from "./SaveWorkout";
import {Link} from 'react-router-dom';
import Taukobutton from "./Taukobutton";
import useAppState from '../hooks/useAppState';
import UusiKortti from "./UusiKortti";

const Doingworkout = (props) => {
    
    const {list} = useAppState();
    
    let items = list.map((item) => {

		return (
        <div>
        <UusiKortti key={item.id} item={item}/>
        <br/>
        </div>
        )
	})
    
    return(
        <div>
        <br/>
        {items}
        <br/>
        
        <br/>
        
        <br/>
        
        <br/>

        <Taukobutton/>


        <Link to="/WorkoutFinished"><SaveWorkout/></Link>
        
        
        </div>
    )
}


export default Doingworkout;