import React from 'react'

import './Field.css';

const Field = ({ name, title, defaultValue, placeHolder, onChangeHandler }) => {
    return (
        <div className='input-field'>
            <label htmlFor={name} >
                {title}
            </label>
            <input name='name' defaultValue={defaultValue} onChange={onChangeHandler} placeholder={placeHolder}/>
        </div>
    )
}

export default Field