import React, { useState } from 'react'

import Button from '../form/Button';
import TasksContext from '../../context/TasksContext';
import Task from './Task';

const TaskContainer = () => {
    let tasks = React.useContext(TasksContext);

    let [renderedTask, setRenderedTask] = useState(filterTasks(tasks, "todo"));

    function filterTasks(tasks, taskStatus) {
        return tasks.filter((task) => task.status == taskStatus);
    }

    function handleClick(clickedButton) {
        let status = "todo";

        if (clickedButton != "todo") {
            status = "complete";
        }

        setRenderedTask(filterTasks(tasks, status));
        // setButtonStatus(status);
    }

    return (
        <div className='task-container' >
            <div className='tab-control'>
                <Button text={"TODO"} type={"button"} onClickHandler={() => handleClick("todo")} status={""} />
                <Button text={"Completed"} type={"button"} onClickHandler={() => handleClick("complete")} status={""} />
            </div>
            {
                renderedTask.map((task, index) => {
                    return <Task key={index} taskName={task.name} taskDescription={task.description} status={task.status} updateHandler={() => { }} deleteHandler={() => { }} />;
                })
            }
        </div>
    )
}

export default TaskContainer