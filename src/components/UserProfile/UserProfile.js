import React from 'react';
// import Button from './shared/Button';

import { profile, p, button } from './UserProfile.module.css';

const UserProfile = ({ user, onLogOut }) => {
    return (
        <div className={profile}>
            <p className={p}>{user.email}</p>
            <button className={button} type="button" onClick={onLogOut}>
                Log Out
            </button>
        </div>
    );
};

export default UserProfile;
