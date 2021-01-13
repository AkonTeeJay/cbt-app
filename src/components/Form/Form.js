import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Forms.css';

const Form = ({ formTitle, info, children, goTo, goToLink }) => {
    return (
        <Fragment>
            <div className='containerForm'>
                <div className='form-container'>
                    <h3 className='form-title'>{formTitle}</h3>
                    <form className='form'>
                        {children ? children : null}
                        <div className='form-group'>
                            <input
                                type='email'
                                placeholder='Email'
                                name='email'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                required
                            />
                        </div>
                        <input
                            className='btn btn-signup'
                            type='submit'
                            value={formTitle}
                        />
                    </form>
                    <p className='info'>
                        {info}{' '}
                        <Link className='link' to={`${goToLink}`}>
                            {goTo.toUpperCase()}
                        </Link>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Form;
