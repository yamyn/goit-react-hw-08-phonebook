import React from 'react';
import PropTypes from 'prop-types';
import { icon, button, wrap } from './ContactsList.module.css';

function ContactsListItem({ name, number, onDeleteContact, index }) {
    return (
        <>
            <div>
                <span>
                    {index}. {name}
                </span>
            </div>
            <div className={wrap}>
                <p>{number}</p>
                <button
                    type="button"
                    onClick={onDeleteContact}
                    className={button}
                >
                    <i className={`${icon} material-icons`}>close</i>
                </button>
            </div>
        </>
    );
}

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default ContactsListItem;
