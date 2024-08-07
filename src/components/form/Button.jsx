import React from 'react';

import './Button.css';

const Button = ({ text, status, onClickHandler }) => {
    return (
        <button type="button" className={`button ${status}`} onClick={onClickHandler}>
            {text}
        </button>
    )
}

export default Button;