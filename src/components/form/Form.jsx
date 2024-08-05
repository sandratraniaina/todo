import React from 'react'

import Field from './Field';
import Button from './Button';
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
            <Button text={"Add"} type={"button"} onClickHandler={() => { }} />
        </div>
    )
}

export default Form
