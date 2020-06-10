import React from 'react';
import PropTypes from 'prop-types';

import { button } from './Button.module.css';

const Button = ({ title }) => (
    <button className={button} type="submit">
        {title}
    </button>
);

Button.defaultProps = {
    title: 'text',
};

Button.propTypes = {
    title: PropTypes.string,
};

export default Button;
