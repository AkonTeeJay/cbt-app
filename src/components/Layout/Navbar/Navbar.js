import React, { Fragment, useState } from 'react';
import Logo from '../../../logo.svg';
import Menu from '../../../menu.svg';
import Back from '../../../back.svg';

import 'boxicons';

import './Navbar.css';

const Navbar = () => {
    const [hide, setHide] = useState(true);

    const handleClick = e => {
        setHide(!hide);
    };

    const authLinks = (
        <ul>
            <li>
                <a href='#!'>
                    <span>Logout</span>
                </a>
            </li>
            <li>
                <a href='#!'>Best Results</a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <a href='#!'>Home</a>
            </li>
            <li>
                <a href='#!'>Sign Up</a>
            </li>
            <li>
                <a href='#!'>Login</a>
            </li>
        </ul>
    );

    return (
        <Fragment>
            <nav className='navbar'>
                <div className='blitz-logo'>
                    <img src={Logo} alt='' />
                </div>
                <div className={`nav-menu ${hide ? 'hidden' : null}`}>
                    {false ? guestLinks : authLinks}{' '}
                    {/* {hide === true && guestLinks} */}
                </div>
                {hide ? (
                    <div className='menu' onClick={handleClick}>
                        <img src={Menu} alt='' />
                    </div>
                ) : (
                    <div className='menu back' onClick={handleClick}>
                        <img src={Back} alt='' />
                    </div>
                )}
            </nav>
        </Fragment>
    );
};

export default Navbar;
