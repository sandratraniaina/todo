import React from 'react'

import Field from './Field';
import './Form.css';

function Form() {
    return (
        <div className='form'>
            <Field
                name={"task"}
                onChangeHandler={() => {
                    console.log("Hello World");
                }}
                title={"Task name"}
                placeHolder={"example: Doing workout"}
            />
            <Field
                name={"description"}
                onChangeHandler={() => {
                    console.log("Hello World");
                }}
                title={"Task Description"}
                placeHolder={"example: Start at 6AM"}
            />
            <button type='button' className='form__submit-button'>
                Add
            </button>
        </div>
    )
}

export default Form
