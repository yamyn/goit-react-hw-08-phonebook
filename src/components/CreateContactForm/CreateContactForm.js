import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../shared/Form/Form';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';

export default class CreateContactForm extends Component {
    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onAddContact({ ...this.state });

        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    title="Name"
                    handleChange={this.handleChange}
                    name="name"
                    holder="Enter contact`s name"
                    id="name_input"
                    value={name}
                />
                <Input
                    title="Number"
                    handleChange={this.handleChange}
                    type="number"
                    name="number"
                    holder="Enter contact`s number"
                    id="number_input"
                    value={number}
                />
                <Button title="Add contact" />
            </Form>
        );
    }
}
