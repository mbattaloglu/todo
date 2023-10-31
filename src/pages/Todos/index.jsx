import { useState } from "react";
import { useUserContext } from "../../states/user";
import { useTodoStore } from "../../stores/todos";
import styles from "./style.module.css";
import TodoLayout from "../../components/TodoLayout";
import AddTodoForm from "../../components/AddTodoForm";
import BlueButton from "../../components/_buttons/BlueButton";

const Todos = () => {
  const todos = useTodoStore((context) => context.todos);
  const user = useUserContext((context) => context.user);

  const [formOpen, setFormOpen] = useState(false);

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
        {user && <BlueButton title="Add Todo" onClick={openForm} />}
      </div>
      {!user && <p>Please login to see your todos.</p>}
      {user && todos.length === 0 && <p>No Todos</p>}
      {user && todos.length > 0 && <TodoLayout todos={todos} />}
      {formOpen && <AddTodoForm closeForm={closeForm} />}
    </div>
  );
};

export default Todos;
