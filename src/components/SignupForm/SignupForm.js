import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../shared/Form/Form';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';

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
            <Form onSubmit={this.handleSubmit}>
                <Input
                    title="Name"
                    handleChange={this.handleChange}
                    name="name"
                    holder="Enter your name"
                    id="name_input"
                    value={name}
                />
                <Input
                    title="Email"
                    handleChange={this.handleChange}
                    type="email"
                    name="email"
                    holder="Enter your email"
                    id="email_input"
                    value={email}
                />
                <Input
                    title="Password"
                    handleChange={this.handleChange}
                    type="password"
                    name="password"
                    holder="Enter your password"
                    id="password_input"
                    value={password}
                />
                <Button title="Sign Up" />
            </Form>
        );
    }
}
