import React from 'react';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Navigation">

      </div>
      <Switch>
        <Route exact path ='/' component={Home} />
        <PrivateRoute path='/driver' component={DriverProfile} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/driverlogin" component={DriverLogin} />
        {/*<Route component={LoginDetails} /> /!*If no other path has been met, route to Login Description*!/*/}
      </Switch>
    </div>
  );
}

export default App;
