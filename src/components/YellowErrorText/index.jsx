import styles from "./style.module.css";
const YellowErrorText = ({canShown}) => {
  return (
    <p
      className={styles["error-text"]}
      style={{ visibility: canShown ? "visible" : "hidden" }}
    >
      Wrong E-mail or Password!
    </p>
  );
};

export default YellowErrorText;
