import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

// import Intro from './components/Intro/Intro';

import './App.css';

const App = () => {
    return (
        <Fragment className='App'>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/auth' component={AuthPage} />
                    <Route exact path='/questions' component={QuestionsPage} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
