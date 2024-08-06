import React, { useState } from 'react';

import './App.css';

import Form from '../form/Form';
import Task from '../task/Task';
import Button from '../form/Button';

const App = () => {
    const filterTasks = (taskStatus) => {
        return tasks.filter((task) => task.completed == taskStatus);
    }

    const [tasks, setTasks] = useState([]);
    const [renderedTask, setRenderedTask] = useState(filterTasks("todo"));

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
                    {
                        renderedTask.map((task) => {
                            <Task taskName={task.name} taskDescription={task.description} status={task.status} />
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default App;
