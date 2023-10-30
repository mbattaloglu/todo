import { useState } from "react";
import "../../styles/common-styles.css";
import stlyes from "./style.module.css";
import { useUserContext } from "../../states/user";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../states/todos";

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
    <div className={stlyes["form-container"]}>
      <form className={stlyes.form} onSubmit={(e) => submitHandler(e)}>
        <h1>Login</h1>
        <label htmlFor="email">
          <input
            className={stlyes.input}
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            className={stlyes.input}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={stlyes.button} type="submit">
          Login
        </button>
        <p
          className={stlyes["error-text"]}
          style={{ visibility: response.error ? "visible" : "hidden" }}
        >
          Wrong E-mail or Password!
        </p>
      </form>
    </div>
  );
};

export default Login;
