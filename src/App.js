//import React from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import React, {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/footer'
import About from './components/About'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);
  const location =
  /*const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Shopping Food",
        day: 'May 20 2021 @07:00 PM',
        reminder: true
    },
    {
        id: 2,
        text: "Shopping Electronics",
        day: 'May 21 2021 @09:30 AM',
        reminder: false
    }
]);*/

useEffect(()=>{

  const getTasks = async () =>{
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
  }
  
  getTasks();

}, [])

// Fetch Tasks from Http url

const fetchTasks = async () =>{
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json()
  return data
}


// Fetch Task of given ID from Http url

const fetchTask = async (id) =>{
  const res = await fetch("http://localhost:5000/tasks/"+id);
  const data = await res.json()
  return data
}

//Delete function

const deleteTask = async (id) => {

    //console.log("Delete "+id)

    await fetch("http://localhost:5000/tasks/"+id, 
      {
        method: 'DELETE'
      })

    setTasks(tasks.filter((task)=>task.id !== id))

}

//Toggle reminder

const toggleReminder = async (id) => {

  const toggleTask = await fetchTask(id)

  const updatedTask = {...toggleTask, reminder: !toggleTask.reminder}

  const res = await fetch("http://localhost:5000/tasks/"+id, {
    method: 'PUT',
    header: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(updatedTask)
  })

  const data = await res.json() 

  setTasks(tasks.map((task)=>task.id === id?{ ...task, reminder: !data.reminder}: task))

}

// Show New Task to Enter details

const addPage = () =>{
  setShowAddTask(!showAddTask)
}

// Add New Task

const addTask = async (task) => {
  //console.log(task.reminder)

  const res = await fetch("http://localhost:5000", {
    method: 'POST',
    header: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])

  /*const id = Math.floor(Math.random()*10000)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  setShowAddTask(!showAddTask)*/
  
}

  return (
    <Router>
      <div className="container">
        <Header addPage={addPage} toggleAddTask={showAddTask}/>
       
        <Route path="/" exact render={
          ()=>(
              <>
                {showAddTask && <AddTask addTask={addTask}/>}
                {tasks.length>0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> :"No Tasks to show"}
              </>

          )} />
      
        <Route path="/about" component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

//Below is class based sample

// class App extends React.Component{

//   render(){

//     return <div className="container">      
//          <Header />
//       </div>
    
//   }

// }

export default App;
