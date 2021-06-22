
import './App.css';
import {NavBar} from './components/navbar/navbar.jsx'
import {ItemListContainer} from './components/Itemlistcontainer/ItemListContainer.jsx'
import {ItemCount} from './components/itemcount/itemcount.jsx'


function App() {
   
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        Bienvenido a Bike Clothing
      </ItemListContainer>
      <ItemCount initial={1} stock={5} onAdd={0}/>
     
      {/* <h1>Hola {fullName} </h1> */}
    </div>
  );
}

export default App;
