import React from 'react';

import './App.css';

import Form from '../form/Form';
import Task from '../task/Task';
import Button from '../form/Button';

const App = () => {
    return (
        <div className='wrapper'>
            <h1>React basic To-do</h1>
            <div className='container'>
                <Form />
                <hr />
                <div className='task-container' >
                    <div className='tab-control'>
                        <Button text={"TODO"} type={"button"} onClickHandler={() => { }} />
                        <Button text={"Completed"} type={"button"} onClickHandler={() => { }} neutral={true} />
                    </div>
                    <Task taskName={"Doing workout"} taskDescription={"Start at 6AM"} isCompleted={true} />
                    <Task taskName={"Doing workout"} taskDescription={"Start at 6AM"} isCompleted={false} />
                </div>
            </div>
        </div>
    )
};

export default App;
