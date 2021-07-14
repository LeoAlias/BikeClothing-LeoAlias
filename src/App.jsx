import './App.css';
import {NavBar} from './components/navbar/navbar.jsx'
import {ItemListContainer} from './pages/Itemlistcontainer/ItemListContainer.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ItemDetailContainer} from './pages/itemdetailcontainer/itemdetailcontainer'
import {CartProvider} from './context/cartcontext'
import {Cart} from './pages/cart/cart'

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
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                </Switch>
          </main>
      </Router>
    </CartProvider>
      )
    }
    
    export default App;
    