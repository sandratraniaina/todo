import React from 'react'

const TaskForm = () => {
    return (
        <form className='form'>
            <input type='text' className='task-name-field' placeholder='Input your task name'/>
            <div className='task-type-container'>
                <span className='task-type'>HTML</span>
                <span className='task-type'>CSS</span>
                <span className='task-type'>JS</span>
                <span className='task-type'>REACT</span>
            </div>
            <select className='task-status'>
                <option>TO-DO</option>
                <option>Pending</option>
                <option>Not started</option>
            </select>
            <button id='submit-btn' className='submit-btn' >Submit</button>
        </form>
    )
}

export default TaskForm
