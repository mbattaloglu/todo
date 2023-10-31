import { useState } from "react";
import styles from "./style.module.css";
import { useUserContext } from "../../states/user";
import { useTodoStore } from "../../states/todos";

const AddTodoForm = ({ closeForm }) => {
  const user = useUserContext((context) => context.user);
  const addTodo = useTodoStore((context) => context.addTodo);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("owner_user_id", user.id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("done", done);

    fetch("http://localhost/todo/addTodo/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert("Something went wrong. Please try again.");
        } else {
          addTodo({
            id: data.id,
            owner_user_id: user.id,
            title,
            description,
            done,
            created_at: data.created_at,
          });
          closeForm();
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <div className={styles["title-container"]}>
          <h2 className={styles["todo-form-title"]}>Add New Todo</h2>
          <button className={styles["cancel-button"]} onClick={closeForm}>
            &#10005;
          </button>
        </div>
        <form className={styles["todo-form"]}>
          <label htmlFor="title">
            <input
              type="text"
              className={styles.input}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="description">
            <textarea
              className={styles.textarea}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label htmlFor="done" className={styles["done-label"]}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="done"
              value={done}
              onChange={(e) => setDone(e.target.checked ? "1" : "0")}
            />
            Done
          </label>
          <button
            className={styles["submit-button"]}
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoForm;
