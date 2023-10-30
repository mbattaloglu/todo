import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../states/user";

const Navbar = () => {
  const user = useUserContext((context) => context.user);

  //Higher order component for auth status
  const authStatus = () => {
    if (!user) {
      return (
        <NavLink className={styles.navlink} to="/login">
          Login
        </NavLink>
      );
    }
    return (
      <NavLink className={styles.navlink} to="/logout">
        Logout
      </NavLink>
    );
  };

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navlink} to="/todos">
        Todos
      </NavLink>
      {authStatus()}
    </nav>
  );
};

export default Navbar;
