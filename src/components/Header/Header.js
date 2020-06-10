import React from 'react';
import PropTypes from 'prop-types';

import { header } from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import UserProfile from '../UserProfile/UserProfile';

const Header = ({ user, authenticated, onLogOut }) => (
    <header className={header}>
        <NavBar auth={authenticated} />
        {authenticated && <UserProfile user={user} onLogOut={onLogOut} />}
    </header>
);

Header.defaultProps = {
    user: PropTypes.shape({
        name: 'name',
        email: 'email',
    }),
};

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    authenticated: PropTypes.bool.isRequired,
    onLogOut: PropTypes.func.isRequired,
};

export default Header;
