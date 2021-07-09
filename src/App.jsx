
import './App.css';
import {NavBar} from './components/navbar/navbar.jsx'
import {ItemListContainer} from './pages/Itemlistcontainer/ItemListContainer.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ItemDetailContainer} from './pages/itemdetailcontainer/itemdetailcontainer'
import {CartProvider} from './context/cartcontext'

function App() {
  
  return (
    <CartProvider>
      <Router>
        <main>
          <NavBar />
              <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/category/:id">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/talles">
                        <div>
                          <h1>Estas en la seccion Talles</h1>
                        </div>
                    </Route>
                    <Route path="/materiales">
                      <div>
                          <h1>Estas en la seccion Materiales</h1>
                        </div>
                    </Route>
                  </Switch>
          </main>
      </Router>
    </CartProvider>
      )
    }
    
    export default App;
    