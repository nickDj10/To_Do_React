import { useState } from "react";
import styles from "./CustomForm.module.css";

const CustomForm = ({ addTask }) => {
   const [task, setTask] = useState("");

   const handleFormSubmit = (event) => {
      event.preventDefault();
      addTask({ name: task, checked: false, id: Date.now() });
      setTask("");
   };

   return (
      <form className={styles["task_form"]} onSubmit={handleFormSubmit}>
         <input
            id="inputId"
            type="text"
            placeholder="Enter Task"
            className={styles["task_form--input"]}
            value={task}
            onInput={(event) => setTask(event.target.value)}
            required
            maxLength={"60"}
         />
         <label htmlFor="inputId" className={styles["task_form--label"]}>
            Enter Task
         </label>
         <button className={styles["btn"]} type="submit">
            +
         </button>
      </form>
   );
};

export default CustomForm;
