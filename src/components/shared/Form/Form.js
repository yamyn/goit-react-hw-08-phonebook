import React from 'react';
import PropTypes from 'prop-types';

import { form } from './Form.module.css';

const Form = ({ onSubmit, children }) => (
    <form onSubmit={onSubmit} className={form}>
        {children}
    </form>
);

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Form;
