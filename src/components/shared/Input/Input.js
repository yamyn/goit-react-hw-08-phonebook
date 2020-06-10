import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, handleChange, type, name, value, holder, id }) => (
    <div>
        <label htmlFor={id}>{title}</label>
        <input
            type={type}
            placeholder={holder}
            value={value}
            onChange={handleChange}
            name={name}
            id={id}
        />
    </div>
);

Input.defaultProps = {
    type: 'text',
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    holder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Input;
