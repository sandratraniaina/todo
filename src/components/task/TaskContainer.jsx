import { useContext, useEffect, useState } from 'react';

import Button from '../form/Button';
import TasksContext from '../../context/TasksContext';
import Task from './Task';

const TaskContainer = ({ deleteHandler, updateHandler }) => {
    let tasks = useContext(TasksContext);

    let [filter, setFilter] = useState("todo");
    let [renderedTask, setRenderedTask] = useState(filterTasks(tasks, filter));
    let [buttonStatus, setButtonStatus] = useState({
        todo: "",
        complete: "neutral"
    });

    useEffect(() => {
        setRenderedTask(filterTasks(tasks, filter));
    }, [tasks, filter]);


    function filterTasks(tasks, taskStatus) {
        return tasks.filter((task) => task.status == taskStatus);
    }

    function handleClick(filter) {
        setFilter(filter);
        setButtonStatus({
            todo: filter == "todo" ? "" : "neutral",
            complete: filter == "complete" ? "" : "neutral"
        })
    }

    return (
        <div className='task-container' >
            <div className='tab-control'>
                <Button text={"TODO"} type={"button"} onClickHandler={() => handleClick("todo")} status={buttonStatus.todo} />
                <Button text={"Completed"} type={"button"} onClickHandler={() => handleClick("complete")} status={buttonStatus.complete} />
            </div>
            {
                renderedTask.map((task, index) => {
                    return <Task key={index} taskName={task.name} taskDescription={task.description} status={task.status} updateHandler={() => { updateHandler(task.id) }} deleteHandler={() => { deleteHandler(task.id) }} />;
                })
            }
        </div>
    )
};

export default TaskContainer;