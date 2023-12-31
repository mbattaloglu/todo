import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../states/user";
import { useTodoStore } from "../../stores/todos";
import "../../styles/common-styles.css";
import stlyes from "./style.module.css";
import InputBox from "../../components/InputBox";
import WhiteButton from "../../components/_buttons/WhiteButton";
import YellowErrorText from "../../components/YellowErrorText";

const Signin = () => {
  const setUser = useUserContext((context) => context.setUser);
  const setTodos = useTodoStore((context) => context.setTodos);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("surname", surname);
    data.append("email", email);
    data.append("password", password);

    await fetch(`${process.env.REACT_APP_API}/signin/`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        if (data.error) {
          return;
        } else {
          setUser({
            name: name,
            surname: surname,
            email: email,
            id: data.id,
          });
          const fetchData = async () => {
            const formData = new FormData();
            formData.append("owner_user_id", data.id);
            await fetch(`${process.env.REACT_APP_API}/getTodos/`, {
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
      });
  };

  return (
    <div className={stlyes["form-container"]}>
      <form className={stlyes.form} onSubmit={(e) => submitHandler(e)}>
        <h1>Signin</h1>
        <InputBox
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          setValue={setName}
        />
        <InputBox
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
          setValue={setSurname}
        />
        <InputBox
          type="email"
          name="mail"
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
        <WhiteButton title="Signin" />
        <Link to="/login" className={stlyes.link}>
          Already Have an Account ?
        </Link>
        <YellowErrorText canShown={response.error} />
      </form>
    </div>
  );
};

export default Signin;
