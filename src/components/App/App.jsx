import { useEffect, useState } from 'react';

import Form from '../form/Form';
import TaskContainer from '../task/TaskContainer';

import TasksContext from '../../context/TasksContext';

const App = () => {
    const [tasks, setTasks] = useState(loadTasks);

    function loadTasks() {
        let tasks = [];

        if (localStorage.getItem("tasks") != null) {
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }

        return tasks;
    }

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

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
            <h1>React Todo</h1>
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
