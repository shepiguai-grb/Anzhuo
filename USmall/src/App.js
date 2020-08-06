import React from 'react';
//Switch相当于路由出口，Route相当于路由，Redirect相当于路由重定向
import { Switch, Route, Redirect } from "react-router-dom"

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Index from './pages/Index/Index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/index' component={Index}></Route>

        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
