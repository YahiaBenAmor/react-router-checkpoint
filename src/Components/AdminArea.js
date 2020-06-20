import React ,{useState} from 'react'
import {BrowserRouter ,Redirect,Route,Link} from 'react-router-dom'
import Login from './Login'


const AdminArea = (props) => {
    const [logged, setLogged] = useState(false)
    
    return (
        <div>
            <BrowserRouter>
            {logged?<h1>Welcome Admin</h1> :<Redirect logged={logged} to={{pathname: '/login',  state: {from: props.location} }} />}
            <Route  path="/login" component={Login}></Route> 
            </BrowserRouter>
        </div>
    )
}

export default AdminArea