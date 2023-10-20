import './App.css';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import {useState} from "react";

function UserProfile({ match }) {
  const userId = match.params.id;

  return (
      <div>
        <h2> User Profile </h2>
        <p> User ID: {userId} </p>
      </div>
  )
}

function Dashboard() {
    return (
        <div className="App-logo">
            <h2>Dashboard</h2>
        </div>
    );
}

function Login(){
    return (
        <div className="App-logo">
            <h2>Login</h2>
        </div>
    );


}

function App() {

    /* eslint-disable no-unused-vars */
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/user/:id" component={UserProfile} />

                    <Route path="/dashboard">
                        {loggedIn ? <Dashboard/> : <Redirect to="/login" />}
                    </Route>

                    <Route path="/login" component={Login} />
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Router>
        </div>
    );

}

export default App;
