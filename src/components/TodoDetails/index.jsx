import { useRef } from "react";
import { useTodoStore } from "../../stores/todos";
import classNames from "classnames";
import styles from "./style.module.css";
import dateFormatter from "../../utils/dateFormatter";

const TodoDetails = ({
  id,
  title,
  description,
  done,
  date,
  closeHandler,
  changeHandler,
}) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const cardRef = useRef(null);

  const doneClasses = classNames(styles.indicator, styles.done);
  const undoneClasses = classNames(styles.indicator, styles.undone);

  date = dateFormatter(date);

  const closeOnClick = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      closeHandler();
    }
  };

  const deleteHandler = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    fetch(`${process.env.REACT_APP_API}/deleteTodo/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          removeTodo(id);
          closeHandler();
        } else {
          alert("Something went wrong!");
        }
      });
  };

  return (
    <div className={styles.container} onClick={(e) => closeOnClick(e)}>
      <div className={styles.card} ref={cardRef}>
        <div className={styles["title-container"]}>
          <h2 className={styles["todo-form-title"]}>{title}</h2>
          <button className={styles.button} onClick={closeHandler}>
            &#10005;
          </button>
        </div>
        <div className={styles["description-container"]}>
          <p>{description}</p>
          <p className={styles.date}>{date}</p>
          <div
            className={done === "1" ? doneClasses : undoneClasses}
            onClick={changeHandler}
          ></div>
          <button
            className={[styles.button, styles["delete-button"]].join(" ")}
            onClick={() => deleteHandler(id)}
          >
            &#128465;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
