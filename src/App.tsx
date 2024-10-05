import {useState, ChangeEvent, KeyboardEvent} from "react";
import "./index.css";

interface Task{
    id:number;
    text:string;
}

interface TaskItemProps {
  task:Task;
  onDelete: () => void;
};

function TaskItem ({task , onDelete} :TaskItemProps){
  return (
<li>
  {task.text}
  <button onClick={onDelete}>Delete </button>
</li>

  )
}

function App(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>(``);
  const [nextId, setNextId] = useState<number>(1);

const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
  setNewTask(e.target.value);
};

const addtask = () => {
  if (newTask.trim()) {
setTasks((prevTasks)=> [...prevTasks,{id:nextId, text:newTask.trim()}])

setNewTask(``);
setNextId
  }
}

const deleteTask = (id:number) => {
  setTasks((prevTasks) => prevTasks.filter((task)=> task.id !== id));
};


const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {

  if (e.key === "Enter") {
    addtask();
  }
}

return (

  <div className="App">
 <h1>  React TO-DO-APP </h1>

 <div>
  
  <input
  type="text"
  value={newTask}
  onChange={handleInputChange}
  onKeyDown={handleKey}
  placeholder="Add a task"
  />
  
<button onClick={addtask}> Add </button>
  
   </div>

<ul>

  {tasks.map((task) => (
    <TaskItem key={task.id} task ={task} onDelete={() => deleteTask(task.id)} />
  ))}

</ul>

  </div>
);

};


export default App;
