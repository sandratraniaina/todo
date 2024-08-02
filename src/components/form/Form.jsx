import React from 'react'

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
            <hr className='form__separator' />
        </div>
    )
}

export default Form
