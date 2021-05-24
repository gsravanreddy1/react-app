import React, {useState} from 'react'
import Task from "./Task"

const Tasks = ({tasks, deleteTask, toggleReminder}) => {

    return (
        <>
          {tasks.map((task) => (              
              <Task key={task.id} taskId={task.id} task={task} deleteEvent={deleteTask} toggleReminder={toggleReminder} />
          ))}  
        </>
    )
}

export default Tasks
