import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                alt='Loading...'
                style={{
                    width: '260px',
                    margin: 'auto',
                    display: 'block',
                    position: 'relative',
                    transform: 'translateY(230px)',
                }}
            />
        </Fragment>
    );
};

export default Spinner;
