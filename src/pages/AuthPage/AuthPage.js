import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from '../../components/Form/Form';

// import Login from '../../components/Login/Login';
// import Register from '../../components/Register/Register';

const Auth = () => {
    return (
        <Fragment>
            {/* <Logo />
            <Login /> */}
            <h1 className='logo'>blitzQuiz</h1>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/auth/login'
                        render={() => (
                            <Form
                                goTo='Sign Up'
                                goToLink='/auth/'
                                info={`Don't have an account yet?`}
                                formTitle='Login'
                            />
                        )}
                    />
                    <Route
                        exact
                        path='/auth/'
                        render={() => (
                            <Form
                                goTo='Login'
                                info='Already have an account?'
                                formTitle='Sign Up'
                                goToLink='/auth/login'
                            >
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        name='name'
                                        required
                                    />
                                </div>
                            </Form>
                        )}
                    />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default Auth;
