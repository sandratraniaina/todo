import React from 'react';


const Task = ({ taskName, taskDescription, status, deleteHandler, updateHandler }) => {
    return (
        <div className='task'>
            <div className='task__details'>
                <h2 className='task__name' >{taskName}</h2>
                <p className='task__description' >{taskDescription}</p>
            </div>
            <div className='task__actions'>
                {
                    status == "todo" ?
                        <p className='task__action update' onClick={updateHandler}>Archive</p>
                        :
                        <p className='task__action update' onClick={updateHandler}>Revert</p>
                }
                <p className='task__action delete' onClick={deleteHandler}>Delete</p>
            </div>
        </div>
    )
}

export default Task;