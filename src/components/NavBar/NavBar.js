import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { list, navigation, link, item } from './NavBar.module.css';

const ativeStyle = {
    color: '#0039d4',
    fontWeight: 'bold',
};

const NavBar = ({ auth }) => (
    <nav className={navigation}>
        <ul className={list}>
            <li className={item}>
                <NavLink to="/" exact activeStyle={ativeStyle} className={link}>
                    Home
                </NavLink>
            </li>

            {auth && (
                <>
                    <li className={item}>
                        <NavLink
                            to="/contacts"
                            exact
                            activeStyle={ativeStyle}
                            className={link}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </>
            )}
            {!auth && (
                <>
                    <li className={item}>
                        <NavLink
                            to="/login"
                            exact
                            activeStyle={ativeStyle}
                            className={link}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className={item}>
                        <NavLink
                            to="/register"
                            exact
                            activeStyle={ativeStyle}
                            className={link}
                        >
                            Sign up
                        </NavLink>
                    </li>
                </>
            )}
        </ul>
    </nav>
);

NavBar.propTypes = {
    auth: PropTypes.bool.isRequired,
};

export default NavBar;
