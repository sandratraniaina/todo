import React, { useState } from 'react';

import './App.css';

import Form from '../form/Form';
import TaskContainer from '../task/TaskContainer';

import TasksContext from '../../context/TasksContext';

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

    function addTask(task) {
        tasks.push(task);
        setTasks(tasks);
    }

    return (
        <div className='wrapper'>
            <h1>React basic To-do</h1>
            <TasksContext.Provider value={tasks}>
                <div className='container'>
                    <Form handler={addTask} />
                    <hr />
                    <TaskContainer/>
                </div>
            </TasksContext.Provider>
        </div>
    )
};

export default App;
