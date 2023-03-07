import "./App.css";
import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";
// custom local storage
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
   const [tasks, setTasks] = useLocalStorage("react-todo", []);
   const [editTask, setEditTask] = useState(null);
   const [isEditing, setIsEditing] = useState(false);

   const addTask = (task) => {
      setTasks((prevState) => [...prevState, task]);
   };

   const deleteTask = (id) => {
      setTasks((prevState) => prevState.filter((task) => task.id !== id));
   };

   const toggleTask = (id) => {
      setTasks((prevState) =>
         prevState.map((task) =>
            task.id === id ? { ...task, checked: !task.checked } : task
         )
      );
   };

   const updateTask = (task) => {
      setTasks((prevState) =>
         prevState.map((t) =>
            t.id === task.id ? { ...task, name: task.name } : t
         )
      );
      closeEditMode();
   };

   const closeEditMode = () => {
      setIsEditing(false);
   };

   const enterEditMode = (task) => {
      setEditTask(task);
      setIsEditing(true);
   };

   return (
      <div className="bg_div">
         <div className="container">
            <div className="container_img"></div>
            <h1>My Task List</h1>
            {isEditing && (
               <EditForm
                  editTask={editTask}
                  updateTask={updateTask}
                  closeEditMode={closeEditMode}
               />
            )}
            <CustomForm addTask={addTask} />
            {tasks && (
               <TaskList
                  tasks={tasks}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  enterEditMode={enterEditMode}
               />
            )}
         </div>
      </div>
   );
}

export default App;
