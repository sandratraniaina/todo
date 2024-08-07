import React, { useId, useState } from 'react';

import './App.css';

import Form from '../form/Form';
import Task from '../task/Task';
import Button from '../form/Button';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            name: "Doing workout",
            description: "Start at 6Am",
            status: "complete"
        },
        {
            name: "Cook",
            description: "Cook our meal",
            status: "todo"
        }
    ]);
    const [renderedTask, setRenderedTask] = useState(filterTasks(tasks, "todo"));
    const [buttonStatus, setButtonStatus] = useState("neutral");

    function filterTasks(tasks, taskStatus) {
        return tasks.filter((task) => task.status == taskStatus);
    }

    function handleClick(clickedButton) {
        let status = "todo";

        if (clickedButton != "todo") {
            status = "complete";
        }

        setRenderedTask(filterTasks(tasks, status));
        setButtonStatus(status);
    }


    return (
        <div className='wrapper'>
            <h1>React basic To-do</h1>
            <div className='container'>
                <Form />
                <hr />
                <div className='task-container' >
                    <div className='tab-control'>
                        <Button text={"TODO"} type={"button"} onClickHandler={() => handleClick("todo")} status={buttonStatus} />
                        <Button text={"Completed"} type={"button"} onClickHandler={() => handleClick("complete")} status={buttonStatus} />
                    </div>
                    {
                        renderedTask.map((task, index) => {
                            return <Task key={index} taskName={task.name} taskDescription={task.description} status={task.status} updateHandler={() => { }} deleteHandler={() => { }} />;
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default App;
