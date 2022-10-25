import './App.css';
import Doingworkoutcard from './components/Doingworkoutcard';
import TaukoNappi from './components/TaukoNappi';


function App() {
  return (
    <div className="App"
    style={{ 
      //marginLeft: 150,
      display: "flex",
      order:"100",
      alignItems: 'center',
      justifyContent: 'center'
      }}>
        <header>
          <br/>
          <Doingworkoutcard/>
          <br/>
          <Doingworkoutcard/>
          <br/>
          <Doingworkoutcard/>
          <br/>
          <TaukoNappi/>
        </header>
    </div>
  );
}

export default App;
