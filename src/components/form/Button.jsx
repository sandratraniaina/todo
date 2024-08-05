import React from 'react';

import './Button.css';

const Button = ({text, neutral, onClickHandler}) => {
  return (
    <button type="button" className={neutral ? "neutral" : ""} onClick={onClickHandler}>
        {text}
    </button>
  )
}

export default Button;