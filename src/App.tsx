import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';

import Overview from './components/Overview/Overview';
import UpdateCountry from './components/UpdateCountry/UpdateCountry';

function App() {
    return (
        <div className="App">
            <section className="logo">Users-on-the-Map!</section>

            <Router>
                <div>
                    <ul className="navbar">
                        <li>
                            <Link to="/">Home - Map</Link>
                        </li>
                        <li>
                            <Link to="/update-country">Update Country</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/">
                            <Overview/>
                        </Route>
                        <Route path="/update-country">
                            <UpdateCountry/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
