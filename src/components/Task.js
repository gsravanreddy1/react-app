import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({taskId, task, deleteEvent, toggleReminder}) {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onMouseDown={()=>"return false"} onDoubleClick={()=>toggleReminder(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={()=>deleteEvent(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
