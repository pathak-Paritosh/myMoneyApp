
// router imports
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App(){
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              { user && <Home /> }              
              { !user && <Redirect to="/login" /> }              
            </Route>
            <Route exact path="/login">
              { user && <Redirect to="/" /> }
              { !user && <Login /> }
            </Route>
            <Route exact path="/signup">
              { user && <Redirect to="/" /> }
              { !user && <Signup /> }
            </Route>
          </Switch>
        </BrowserRouter>
      ) }
    </div>
  )
}

export default App;
