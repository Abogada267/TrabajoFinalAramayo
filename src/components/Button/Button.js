/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Button.css';

const Button = ({ color, label, callback }) => {
    return (
        <button style={{ backgroundColor: color }} onClick={callback} className={styles.button}>
            {label}
        </button>
    );
};

export default Button;
