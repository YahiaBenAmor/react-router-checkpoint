import React from 'react';
import {BrowserRouter,Route,Link } from 'react-router-dom'
import Category from './Components/Category'
import Product from './Components/Products'
import AdminArea from './Components/AdminArea';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {
  return (
  <BrowserRouter>
    
    <div className="App">
      <ul className="navbar nav justify-content-around  bg-light">
    <li className="nav-link "><Link to="/">Home</Link></li>
    <li><Link to="/Category">Category</Link></li>
    <li><Link to="/Product">Products</Link></li>
    <li><Link to="/AdminArena">Admin Area</Link></li>

    </ul>
    <Route path="/" exact component={Home}></Route>
    <Route path="/Category" component={Category}></Route>
    <Route path="/Product" component={Product}></Route>
    <Route path="/AdminArena" component={AdminArea}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;


//Home component
const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};