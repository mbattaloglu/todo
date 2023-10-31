import styles from "./style.module.css";

const InputBox = ({ type, name, placeholder, value, setValue }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
};

export default InputBox;
