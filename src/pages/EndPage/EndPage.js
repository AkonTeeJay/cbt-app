import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './EndPage.css';

const EndPage = () => {
    return (
        <Fragment>
            <div className='container'>
                <div id='end' className='flex-center flex-column'>
                    <h2 id='name'>Joseph</h2>
                    <h1 id='finalScore'>{/*Final Score*/}0</h1>
                </div>
                <Link to='/questions'>
                    <button className='btn'>Try Again</button>
                </Link>
                <Link to='/'>
                    <button className='btn'>Go Home</button>
                </Link>
            </div>
        </Fragment>
    );
};

export default EndPage;
