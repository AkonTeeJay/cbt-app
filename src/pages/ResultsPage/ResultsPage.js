import React, { Fragment } from 'react';
import '../../App.css';
import './ResultPage.css';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
    return (
        <Fragment>
            <div className='container'>
                <div id='results' className='flex-center flex-column'>
                    <h1 id='finalScore'>Best Results</h1>
                    <ul id='resultsList'>
                        <li className='result'>
                            {' '}
                            Joseph - 30{/*result.name - result.score*/}
                        </li>
                        <li></li>
                    </ul>
                    <Link to='/'>
                        <button className='btn'></button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default ResultsPage;
