import logo from './logo.svg';
import './App.css';
import Land from './Land';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';

function App() {
  return (

    <Router>
      <Routes>
           <Route element={<Land/>} path='/'/>
           <Route element={<Shop/>} path='/Shop' />
           <Route element={<Cart/>} path='/Cart' />
     </Routes>
    </Router>
  );
}

export default App;

