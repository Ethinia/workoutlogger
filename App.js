import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Kalenteri3 from './components/Kalenteri3';
import Navbar from './components/Navbar';
import Historia from './components/Historia';
import Sivu2 from './components/sivu2';
import Doingworkout from './components/Doingworkout';

function App() {
  return (
    <div className="App"
>
        <Navbar/>
        <body    
            style={{ 
          //marginLeft: 150,
          display: "flex",
          order:"100",
          alignItems: 'center',
          justifyContent: 'center'
          }}>
                <Routes>
						<Route exact path="/" element={<Kalenteri3/>}/>
						<Route path="/Historia" element={<Historia/>}/>
						<Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/Sivu2" element={<Sivu2/>}/>
            <Route path="/Doingworkout" element={<Doingworkout/>}/>
					</Routes>
        </body>
          <h1>Tervetuloa workoutloggeriin</h1>
    </div>
  );
}

export default App;
