import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTodoStore } from "../../states/todos";
import { useUserContext } from "../../states/user";
import "../../styles/common-styles.css";
import styles from "./style.module.css";
import InputBox from "../../components/InputBox";
import WhiteButton from "../../components/_buttons/WhiteButton";
import YellowErrorText from "../../components/YellowErrorText";

const Login = () => {
  const setUser = useUserContext((context) => context.setUser);
  const setTodos = useTodoStore((context) => context.setTodos);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    await fetch("http://localhost/todo/login/", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        if (data.error) {
          return;
        } else {
          setUser(data);
          const fetchData = async () => {
            const formData = new FormData();
            formData.append("owner_user_id", data.id);
            await fetch("http://localhost/todo/getTodos/", {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((data) => {
                setTodos(data);
              });
          };
          fetchData();
          navigate("/");
        }
        setPassword("");
      });
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
        <h1>Login</h1>
        <InputBox
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <WhiteButton title="Login" />
        <Link to="/signin" className={styles.link}>
          Don't You Have an Account ?
        </Link>
        <YellowErrorText canShown={response.error} />
      </form>
    </div>
  );
};

export default Login;
