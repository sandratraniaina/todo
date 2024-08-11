import React from 'react';

const Button = ({ text, status, onClickHandler }) => {
    return (
        <button type="button" className={`button ${status}`} onClick={onClickHandler}>
            {text}
        </button>
    )
}

export default Button;