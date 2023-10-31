import styles from "./style.module.css";

const BlueButton = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default BlueButton;
