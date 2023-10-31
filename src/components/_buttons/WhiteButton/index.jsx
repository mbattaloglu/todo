import styles from "./style.module.css";

const WhiteButton = ({title}) => {
  return (
    <button className={styles.button} type="submit">
      {title}
    </button>
  );
};

export default WhiteButton;
