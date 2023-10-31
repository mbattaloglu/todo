import { useState } from "react";
import { useUserContext } from "../../states/user";
import TodoLayout from "../../components/TodoLayout";
import styles from "./style.module.css";
import AddTodoForm from "../../components/AddTodoForm";
import { useTodoStore } from "../../states/todos";
import BlueButton from "../../components/_buttons/BlueButton";

const Todos = () => {
  const todos = useTodoStore((context) => context.todos);
  const [formOpen, setFormOpen] = useState(false);
  const user = useUserContext((context) => context.user);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>Your Todos</h1>
        {user && (
          <BlueButton title="Add Todo" onClick={openForm} />
        )}
      </div>
      {!user && <p>Please login to see your todos.</p>}
      {user && todos.length === 0 && <p>No Todos</p>}
      {user && todos.length > 0 && <TodoLayout todos={todos} />}
      {formOpen && <AddTodoForm closeForm={closeForm} />}
    </div>
  );
};

export default Todos;
