import { useTodoStore } from "../../states/todos";
import TodoItem from "../TodoItem";
import styles from "./style.module.css";

const TodoLayout = ({ todos }) => {
  const updateTodo = useTodoStore((context) => context.updateTodo);
  const changeTodoStatus = (e, todo) => {
    e.preventDefault();
    todo = {
      ...todo,
      done: todo.done === "1" ? "0" : "1",
    };
    updateTodo(todo.id, todo);

    const formData = new FormData();
    formData.append("id", todo.id);
    formData.append("done", todo.done === "1" ? "0" : "1");
    fetch(`http://localhost/todo/updateTodoStatus/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log("Todo status updated");
        } else {
          console.log("Todo status update failed");
        }
      });
  };

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
          createdAt={todo["created_at"]}
          done={todo.done}
          changeTodoStatus={(e) => changeTodoStatus(e, todo)}
        />
      ))}
    </div>
  );
};

export default TodoLayout;
