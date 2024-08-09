import React, { useState } from 'react';

import Field from './Field';
import Button from './Button';
import './Form.css';

function Form({handler}) {

    let [formData, setFormData] = useState({
        status: "todo"
    });

    function createTask() {
        console.log(formData);
        if (formData["name"] != "" && formData["description"] != null) {
            console.log("Hello there");
            handler(formData);
        }
    }

    function updateFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='form'>
            <Field
                name={"name"}
                onChangeHandler={updateFormData}
                title={"Task name"}
                placeHolder={"example: Doing workout"}
            />
            <Field
                name={"description"}
                onChangeHandler={updateFormData}
                title={"Task Description"}
                placeHolder={"example: Start at 6AM"}
            />
            <Button text={"Add"} type={"button"} onClickHandler={createTask} />
        </div>
    )
}

export default Form
