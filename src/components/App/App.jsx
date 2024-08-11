import { useState } from 'react';

import './App.css';

import Form from '../form/Form';
import TaskContainer from '../task/TaskContainer';

import TasksContext from '../../context/TasksContext';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: "task#1",
            name: "Doing workout",
            description: "Start at 6Am",
            status: "complete"
        },
        {
            id: "task#2",
            name: "Cook",
            description: "Cook our meal",
            status: "todo"
        }
    ]);

    function generateId() {
        return Date.now().toString();
    }

    function addTask(task) {
        setTasks([...tasks, { ...task, id: generateId() }]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => {
            return task.id != id;
        }));
    }

    function updateTask(id) {
        setTasks(tasks.map((task) => {
            if (task.id == id) {
                task.status = task.status == "todo" ? "complete" : "todo";
            }
            return task;
        }));
    }

    return (
        <div className='wrapper'>
            <h1>React basic To-do</h1>
            <TasksContext.Provider value={tasks}>
                <div className='container'>
                    <Form handler={addTask} />
                    <hr />
                    <TaskContainer deleteHandler={deleteTask} updateHandler={updateTask} />
                </div>
            </TasksContext.Provider>
        </div>
    )
};

export default App;
