import Doingworkoutcard from "./Doingworkoutcard";
import SaveWorkout from "./SaveWorkout";
import {Link} from 'react-router-dom';
import Taukobutton from "./Taukobutton";

const Doingworkout = () => {
    return(
        <div>
        <br/>
        <Doingworkoutcard/>
        <br/>
        <Doingworkoutcard/>
        <br/>
        <Doingworkoutcard/>
        <br/>

        <br/>

        <Taukobutton/>


        <Link to="/WorkoutFinished"><SaveWorkout/></Link>
        </div>
    )
}


export default Doingworkout;