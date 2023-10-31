import { useTodoStore } from "../../stores/todos";
import { useUserContext } from "../../states/user";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const logout = useUserContext((context) => context.logout);
  const clearTodos = useTodoStore((context) => context.clearTodos);

  const handleLogout = () => {
    clearTodos();
    logout();
  };

  return <Navigate to="/">{handleLogout()}</Navigate>;
};

export default Logout;
