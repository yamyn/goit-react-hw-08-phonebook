import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import NavItem from './NavItem';

import { list, navigation, link, item } from './NavBar.module.css';

const ativeStyle = {
    color: '#0039d4',
    fontWeight: 'bold',
};

const NavBar = () => (
    <nav className={navigation}>
        <ul className={list}>
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
                <NavLink to="/" exact activeStyle={ativeStyle} className={link}>
                    Contacts
                </NavLink>
            </li>
        </ul>
    </nav>
);

// Header.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default NavBar;
