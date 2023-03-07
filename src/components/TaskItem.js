import { useState } from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
   const [isChecked, setIsChecked] = useState(task.checked);

   const handleCheckChange = (event) => {
      setIsChecked(!isChecked);
      toggleTask(task.id);
   };

   return (
      <li className={styles["content_list"]}>
         <div className={styles["content_list--one"]}>
            <input
               type="checkbox"
               className={styles["checkBox"]}
               checked={isChecked}
               onChange={handleCheckChange}
               name={task.name}
               id={task.id}
            />
            <label
               className={
                  styles["list_icon--first"] + " " + styles["list_icon"]
               }
               htmlFor={task.id}
            ></label>
            <label htmlFor={task.id} className={styles["content_list--task"]}>
               {task.name}
            </label>
         </div>

         <div className={styles["content_list--two"]}>
            <button
               className={
                  styles["list_icon--second"] + " " + styles["list_icon"]
               }
               onClick={() => enterEditMode(task)}
            ></button>
            <button
               className={
                  styles["list_icon--third"] + " " + styles["list_icon"]
               }
               onClick={() => deleteTask(task.id)}
            ></button>
         </div>
      </li>
   );
};

export default TaskItem;
