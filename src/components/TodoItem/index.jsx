import { useState } from "react";
import styles from "./style.module.css";
import classNames from "classnames";
import dateFormatter from "../../utils/dateFormatter";
import TodoDetails from "../TodoDetails";

const TodoItem = ({
  title,
  description,
  createdAt,
  done,
  changeTodoStatus,
}) => {
  const [details, setDetails] = useState(false);

  const doneClasses = classNames(styles.indicator, styles.done);
  const undoneClasses = classNames(styles.indicator, styles.undone);

  const adjustTitle = (title) => {
    if (title.length > 26) {
      return <h2 className={styles.title}>{title.substring(0, 26) + "..."}</h2>;
    } else {
      return <h2 className={styles.title}>{title}</h2>;
    }
  };

  const openDetails = () => {
    setDetails(true);
  };

  const closeDetails = () => {
    setDetails(false);
  };

  return (
    <>
      <div className={styles.card} onClick={openDetails}>
        {adjustTitle(title)}
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{dateFormatter(createdAt)}</p>
        <div
          className={done === "0" ? undoneClasses : doneClasses}
          onClick={changeTodoStatus}
        ></div>
      </div>
      {details && (
        <TodoDetails
          title={title}
          description={description}
          date={createdAt}
          done={done}
          onClick={closeDetails}
        />
      )}
    </>
  );
};

export default TodoItem;
