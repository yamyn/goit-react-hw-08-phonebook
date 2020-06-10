import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { list, item } from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';
import Notification from '../shared/Notification/Notification';
import slideTransition from '../../transitions/slide.module.css';

export default class ContactsList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }),
        ).isRequired,
        onDeleteContact: PropTypes.func.isRequired,
        onLoadContacts: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { onLoadContacts } = this.props;
        onLoadContacts();
    }

    render() {
        const { contacts, onDeleteContact } = this.props;
        return (
            <>
                {contacts.length > 0 ? (
                    <TransitionGroup component="ul" className={list}>
                        {contacts.map(({ id, name, number }, index) => (
                            <CSSTransition
                                key={id}
                                timeout={300}
                                classNames={slideTransition}
                                unmountOnExit
                            >
                                <li key={id} className={item}>
                                    <ContactsListItem
                                        index={index + 1}
                                        name={name}
                                        number={number}
                                        onDeleteContact={() =>
                                            onDeleteContact(id)
                                        }
                                    />
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                ) : (
                    <Notification message="Contacts for query not found" />
                )}
            </>
        );
    }
}
