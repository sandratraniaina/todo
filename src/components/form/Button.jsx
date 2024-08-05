import React from 'react';

import './Button.css';

const Button = ({text, onClickHandler}) => {
  return (
    <button type="button" onClick={onClickHandler}>
        {text}
    </button>
  )
}

export default Button;