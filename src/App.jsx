
import './App.css';
import {NavBar} from './components/navbar/navbar.jsx'
import {ItemListContainer} from './components/Itemlistcontainer/ItemListContainer.jsx'
import {ItemCount} from './components/itemcount/itemcount.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
   
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <ItemCount initial={1} stock={5} onAdd={0}/>
     </div>
  );
}

export default App;
