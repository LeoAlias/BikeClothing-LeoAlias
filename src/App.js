
import './App.css';
import {NavBar} from './components/navbar/navbar'

function App() {
  let name = 'Leonardo'
  let lastname = 'Alías'
  let fullName =  `${name} ${lastname}`
  
  
  return (
    <div className="App">
      <NavBar />
      {/* <h1>Hola {fullName} </h1> */}
    </div>
  );
}

export default App;
