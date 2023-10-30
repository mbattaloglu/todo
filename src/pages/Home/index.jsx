import { useUserContext } from "../../states/user";
import TodoLayout from "../../components/TodoLayout";
import styles from "./style.module.css";
import { useTodoStore } from "../../states/todos";

const Home = () => {
  const user = useUserContext((context) => context.user);
  const todos = useTodoStore((context) => context.todos);

  const undoneTodos = todos.filter((todo) => todo.done === "0");

  return (
    <div className="container">
      {user ? (
        <div>
          <h1 className={styles["welcome-title"]}>
            Welcome, {user.name} {user.surname}
          </h1>
          <p className={styles.title}>Your Undone Todos</p>
          <TodoLayout todos={undoneTodos} />
        </div>
      ) : (
        <div>
          <h1 className={styles["welcome-title"]}>Welcome !</h1>
          <p>Please Log In</p>
        </div>
      )}
    </div>
  );
};

export default Home;
