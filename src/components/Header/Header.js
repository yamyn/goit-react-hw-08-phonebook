import React from 'react';
import PropTypes from 'prop-types';

import { header } from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import UserProfile from '../UserProfile/UserProfile';

const Header = ({ user, authenticated, onLogOut }) => (
    <header className={header}>
        <NavBar />
        {authenticated && <UserProfile user={user} onLogOut={onLogOut} />}
    </header>
);
// Section.propTypes = {
//     title: PropTypes.string.isRequired,

//     children: PropTypes.node.isRequired,
// };

export default Header;
