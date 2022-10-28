import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Kalenteri3 from './components/Kalenteri3';
import Navbar from './components/PageNavbar';
import Historia from './components/Historia';
import Sivu2 from './components/sivu2';
import Doingworkout from './components/Doingworkout';
import LoginPage from './components/LoginPage';
import WorkoutFinished from './components/WorkoutFinished';

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
              <Route exact path="/" element={<LoginPage/>}/>
              <Route path="/Kalenteri3" element={<Kalenteri3/>}/>
              <Route path="/Historia" element={<Historia/>}/>
              <Route path="*" element={<Navigate to="/"/>}/>
              <Route path="/Sivu2" element={<Sivu2/>}/>
              <Route path="/Doingworkout" element={<Doingworkout/>}/>
              <Route path="/WorkoutFinished" element={<WorkoutFinished/>}/>
					</Routes>
        </body>
    </div>
  );
}

export default App;
