import React, { Fragment } from 'react';
import './HomePage.css';

import Navbar from '../../components/Layout/Navbar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='home-content container'>
                <div className='intro tex-center'>
                    <h1 className='intro-text'>Test your knowledge now...</h1>
                    <div className='intro-links'>
                        <Link to='/auth'>
                            <button className='btn'>Start</button>
                        </Link>
                        <Link to='/results'>
                            <button className='btn'>Best Results</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HomePage;
