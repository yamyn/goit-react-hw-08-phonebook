import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { form, button } from './SignupForm.module.css';

export default class SignupForm extends Component {
    static propTypes = {
        onSignup: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSignup({ ...this.state });

        this.setState({
            name: '',
            email: '',
            password: '',
        });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={form}>
                <div>
                    <label htmlFor="name_input">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                        id="name_input"
                    />
                </div>
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
                    Sign Up
                </button>
            </form>
        );
    }
}
