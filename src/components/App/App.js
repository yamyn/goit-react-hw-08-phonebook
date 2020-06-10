import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.module.css';
import slideTittleTransition from '../../transitions/slide-500ms.module.css';
import popTransition from '../../transitions/pop.module.css';

// Pages
import ContactsPage from '../../pages/ContactsPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignupPage';

import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/HeaderContainer';
import Alert from '../Alert/Alert';

export default class App extends Component {
    static propTypes = {
        alert: PropTypes.string.isRequired,
        refreshUser: PropTypes.func.isRequired,
    };

    state = {
        addTittle: false,
    };

    componentDidMount() {
        const { refreshUser } = this.props;
        refreshUser();

        this.setState({
            addTittle: true,
        });
    }

    render() {
        const { addTittle } = this.state;
        const { alert } = this.props;
        const isAlert = !!alert;

        return (
            <div className={styles.container}>
                <CSSTransition
                    in={addTittle}
                    timeout={500}
                    classNames={slideTittleTransition}
                    unmountOnExit
                >
                    <h1>Phonebook</h1>
                </CSSTransition>
                <Header />
                <Switch>
                    <ProtectedRoute
                        path="/contacts"
                        component={ContactsPage}
                        redirectTo="/login"
                    />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={SignUpPage} />
                    <Redirect to="/" />
                </Switch>
                <CSSTransition
                    in={isAlert}
                    timeout={300}
                    classNames={popTransition}
                    unmountOnExit
                >
                    <Alert message={alert} />
                </CSSTransition>
            </div>
        );
    }
}
