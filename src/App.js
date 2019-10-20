import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from './components/Dashboard/Dashboard';
// import LiveStreams from './components/LiveStreams/LiveStreams';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import Settings from './components/Settings/Settings';
import './App.css';

const App = () => {

    const history = createBrowserHistory();

    return <div>
        <BrowserRouter>
            <Router history={history} >
                <div className="flex-column main-cnt">
                    <div>
                        {/* <Route exact path="/" component={Dashboard} /> */}
                        <div>
                            <Nav/>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/highexperience" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/user" component={Dashboard} />
                        </div>

                        {/* <Route exact path="/" component={LiveStreams} />
                        <Route exact path="/stream/:username" component={VideoPlayer} />
                        <Route exact path="/settings" component={Settings} /> */}
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        </BrowserRouter>
    </div>;
}

export default App;
