import Card from 'react-bootstrap/Card';
import Buttons from "./Buttons";

const Doingworkoutcard = () =>{
    let liikkeenNimi = "Penkki"
    let sarjojenMaara = "5 Sarjaa"
    let sarjanPaino = "75 Kiloa "
    let paivanyt = "19.10.2022"

    const Paivamaara = () => {
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
                {paivanyt}
            </div>)
        }

    const Penkki = () => {
        return(
        <div 
            style={{
                marginRight: 75,
                borderRadius:50,
                borderColor:'rgba(0,0,0,1)',
            }}
            >
                {liikkeenNimi}
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
        backgroundColor: "cyan",
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
                    <Penkki/>
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