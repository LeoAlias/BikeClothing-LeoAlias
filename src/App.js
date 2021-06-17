
import './App.css';
import {NavBar} from './components/navbar/navbar'
import {ItemListContainer} from './components/Itemlistcontainer/ItemListContainer'


function App() {
  // let name = 'Leonardo'
  // let lastname = 'Alías'
  // let fullName =  `${name} ${lastname}`
  
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        Bienvenido a Bike Clothing
      </ItemListContainer>
     
      {/* <h1>Hola {fullName} </h1> */}
    </div>
  );
}

export default App;
