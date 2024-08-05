import React from 'react';

const Task = ({taskName, taskDescription, isCompleted, deleteHandler, updateHandler}) => {
  return (
    <div className='task'>
        <div className='task__details'>
            <h2 className='task__name' >{taskName}</h2>
            <p className='task__description' >{taskDescription}</p>
        </div>
        <div className='task__actions'>
            <p className='task__action' onClick={deleteHandler}>Delete</p>
            <p className='task__action' onClick={updateHandler}>{isCompleted ? "Undo" : "Done"}</p>
        </div>
    </div>
  )
}

export default Task;