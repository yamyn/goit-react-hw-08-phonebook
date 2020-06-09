import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { form, button } from './LoginForm.module.css';

export default class LoginForm extends Component {
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
    };

    state = {
        email: '',
        password: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onLogin({ ...this.state });

        this.setState({
            email: '',
            password: '',
        });
    };

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={form}>
                <div>
                    <label htmlFor="email_input">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={this.handleChange}
                        name="email"
                        id="email_input"
                    />
                </div>
                <div>
                    <label htmlFor="password_input">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={this.handleChange}
                        name="password"
                        id="password_input"
                    />
                </div>
                <button className={button} type="submit">
                    Login
                </button>
            </form>
        );
    }
}
