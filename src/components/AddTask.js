import React, {useState}  from 'react'

function AddTask({addTask}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert("Please enter Task Text")
            return
        }

        addTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            
            <div className='form-control'>
                <label htmlFor="taskText">Task</label>
                <input type="text" id="taskText" placeholder="Enter Task text" value={text}
                       onChange={(e)=> setText(e.target.value)}></input>
            </div>

            <div className='form-control'>
                <label htmlFor="day">Day</label>
                <input type="text" id="day" placeholder="Add Day" value={day}
                        onChange={(e)=> setDay(e.target.value)}></input>
            </div>

            <div className='form-control form-control-check'>
                <label htmlFor="reminderId">Reminder</label>
                <input type="checkbox" id="reminderId" checked={reminder}
                       onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
            </div>
            
            <input type="submit" value="Add Task" className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
