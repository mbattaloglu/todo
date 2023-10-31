import classNames from "classnames";
import styles from "./style.module.css";
import dateFormatter from "../../utils/dateFormatter";

const TodoDetails = ({ title, description, done, date, onClick }) => {
  const doneClasses = classNames(styles.indicator, styles.done);
  const undoneClasses = classNames(styles.indicator, styles.undone);

  date = dateFormatter(date);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["title-container"]}>
          <h2 className={styles["todo-form-title"]}>{title}</h2>
          <button className={styles["cancel-button"]} onClick={onClick}>
            &#10005;
          </button>
        </div>
        <div className={styles["description-container"]}>
          <p>{description}</p>
          <p className={styles.date}>{date}</p>
          <div className={done === "1" ? doneClasses : undoneClasses}></div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
