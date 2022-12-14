import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/PageNavbar';
import Historia from './components/Historia';
import Doingworkout from './components/Doingworkout';
import LoginPage from './components/LoginPage';
import WorkoutFinished from './components/WorkoutFinished';
import Sivu2b from './components/sivu2b';
import TeeTreeniTesti from './components/TeeTreeniTesti';
import Lista from './components/Lista';
import UusiKortti from './components/UusiKortti';
import {useEffect} from 'react';
import useAction from './hooks/useAction';
import TeeTreeniHaku from './components/TeeTreeniHaku';

//import useAppState from './hooks/useAppState';

function App() {

  const {getList} = useAction();

	useEffect(() => {
		
			getList();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

/*
  // Loading and error zone.

  const {loading,error} = useAppState();

  let messageZone = <h4> </h4>
	if(loading) {
		messageZone = <h4>Loading ...</h4>
	}
	if(error) {
		messageZone = <h4>{error}</h4>
	}
*/
  return (
    <div className="App"
>
        <Navbar/>
       
        <div    
            style={{ 
          //marginLeft: 150,
          display: "flex",
          order:"100",
          alignItems: 'center',
          justifyContent: 'center'
          }}>
          <Routes>
              <Route exact path="/" element={<LoginPage/>}/>
              <Route path="/Historia" element={<Historia/>}/>
              <Route path="*" element={<Navigate to="/"/>}/>
              <Route path="/Sivu2b" element={<Sivu2b/>}/>
              <Route path="/Doingworkout" element={<Doingworkout/>}/>
              <Route path="/WorkoutFinished" element={<WorkoutFinished/>}/>
              <Route path="/TeeTreeniTesti" element={<TeeTreeniTesti/>}/>
              <Route path="/Lista" element={<Lista/>}/>
              <Route path="/UusiKortti" element={<UusiKortti/>}/>
              <Route path="/TeeTreeniHaku" element={<TeeTreeniHaku/>}/>
					</Routes>
        </div>
    </div>
  );
}

export default App;
