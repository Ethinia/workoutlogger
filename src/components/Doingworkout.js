import Doingworkoutcard from "./Doingworkoutcard";
import SaveWorkout from "./SaveWorkout";
import TaukoNappi from "./TaukoNappi";
import {Link} from 'react-router-dom';

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
        <TaukoNappi/>
        <br/>

        <Link to="/WorkoutFinished"><SaveWorkout/></Link>
        </div>
    )
}


export default Doingworkout;