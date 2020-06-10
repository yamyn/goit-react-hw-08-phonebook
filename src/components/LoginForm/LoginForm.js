import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../shared/Form/Form';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';

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
            <Form onSubmit={this.handleSubmit}>
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
                <Button title="Login" />
            </Form>
        );
    }
}
