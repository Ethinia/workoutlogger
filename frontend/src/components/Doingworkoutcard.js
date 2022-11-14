import Card from 'react-bootstrap/Card';
import Buttons from "./Buttons";
import React from 'react';


const Doingworkoutcard = (props) =>{
    //const [date, setDate] = useState(new Date());
    //const [showTime, setShowTime] = useState(false) 
    
    //let liikkeenNimi = "Penkki"
    let sarjojenMaara = "5 Sarjaa"
    let sarjanPaino = "75 Kiloa "
    //let paivanyt = "19.10.2022"

    /*
            näitä päivämäärä divin sisälle näyttään päivää

                {props.date}
                <h3>{date.toDateString()} systeemi kello</h3>
                <Time showTime={showTime} date={date}/>
    */

    const Paivamaara = (props) => {
        return(
        <div 
            style={{
                justifyContent:"left",
                display: "flex",
                //margin:10,
                marginRight: 75,
                borderRadius:50,
                borderColor:'rgba(0,0,0,1)',
            }}
            >
            
          
            </div>)
        }

    const Liike = (props) => {
        return(
        <div 
            style={{
                marginRight: 75,
                borderRadius:50,
                borderColor:'rgba(0,0,0,1)',
            }}
            >
                {props.name}
            </div>)
        }

    const SarjojenMaara = () => {
        return(
        <div 
            style={{
                marginRight: 75,
                borderRadius:50,
                borderColor:'rgba(0,0,0,1)',
            }}
            >
                {sarjojenMaara}
            </div>)
        }

    const SarjanPaino = () => {
        return(
        <div 
            style={{
                //marginRight: 75,
                borderRadius:50,
                borderColor:'rgba(0,0,0,1)',
            }}
            >
                {sarjanPaino}
            </div>)
        }

    return (
      <Card style={{ 
        backgroundColor: "grey",
        width: '32rem',
        height:'9.5rem' }}>
        <Card.Body>
            <Paivamaara/>
                <Card.Title style={{ 
                    margin:10,
                    justifyContent: 'left',
                    alignItems: 'left',
                    display: "flex"
                        }}>
                    <Liike/>
                    <SarjojenMaara/>
                    <SarjanPaino/>
                </Card.Title>
                    <Card.Text>
                        <Buttons/>
                    </Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default Doingworkoutcard;