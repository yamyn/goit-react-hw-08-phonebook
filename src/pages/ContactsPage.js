import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getContactsLength } from '../redux/contacts/contactsSelectors';

import Section from '../components/shared/Section/Section';
import ContactsList from '../components/ContactsList/ContatctsListContainer';
import Filter from '../components/Filter/FilterContainer';

import CreateContactForm from '../components/CreateContactForm/CreateContactFormContainer';

import popTransition from '../transitions/pop.module.css';

const Home = ({ count }) => {
    return (
        <>
            <Section title="">
                <CreateContactForm />
            </Section>
            <CSSTransition
                in={count >= 2}
                timeout={500}
                classNames={popTransition}
                unmountOnExit
            >
                <Section title="">
                    <Filter />
                </Section>
            </CSSTransition>
            <Section title="">
                <ContactsList />
            </Section>
        </>
    );
};

Home.propTypes = {
    count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    count: getContactsLength(state),
});

export default connect(mapStateToProps, null)(Home);
