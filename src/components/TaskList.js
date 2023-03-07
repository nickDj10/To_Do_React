import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
   return (
      <div className={styles["content"]}>
         <ul>
            {tasks.map((task) => (
               <TaskItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  enterEditMode={enterEditMode}
               />
            ))}
         </ul>
      </div>
   );
};

export default TaskList;
