import styles from "./style.module.css";

const BlueButton = ({title}) => {
  return (
    <button className={styles.button} type="submit">
      {title}
    </button>
  );
};

export default BlueButton;
