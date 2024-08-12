import { useState } from 'react';

import Field from './Field';
import Button from './Button';

function Form({ handler }) {

    let [formData, setFormData] = useState({
        status: "todo"
    });

    function createTask() {
        if (formData["name"] != "" && formData["description"] != null) {
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
};

export default Form;
