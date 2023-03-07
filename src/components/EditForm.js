import { useEffect, useState } from "react";
import styles from "./EditForm.module.css";

const EditForm = ({ editTask, updateTask, closeEditMode }) => {
   const [updatedTask, setUpdatedTask] = useState(editTask.name);

   const handleFormSubmit = (event) => {
      event.preventDefault();
      updateTask({ ...editTask, name: updatedTask });
   };

   useEffect(() => {
      const closeModal = (event) => {
         event.key === "Escape" && closeEditMode();
      };

      window.addEventListener("keydown", closeModal);

      return () => {
         window.removeEventListener("keydown", closeModal);
      };
   }, [closeEditMode]);

   return (
      <div
         className={styles["edit_form_bg"]}
         onClick={(event) => {
            event.target === event.currentTarget && closeEditMode();
         }}
      >
         <div className={styles["edit_form"]}>
            <form className={styles["task_form"]} onSubmit={handleFormSubmit}>
               <input
                  id="editInputId"
                  type="text"
                  placeholder="Enter Task"
                  className={styles["task_form--input"]}
                  value={updatedTask}
                  onInput={(event) => setUpdatedTask(event.target.value)}
                  required
                  maxLength={"60"}
               />
               <label
                  htmlFor="editInputId"
                  className={styles["task_form--label"]}
               >
                  Update Task
               </label>
               <button className={styles["btn"]} type="submit">
                  +
               </button>
            </form>
         </div>
      </div>
   );
};

export default EditForm;
