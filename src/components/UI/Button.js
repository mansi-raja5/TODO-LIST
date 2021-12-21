import styles from './Button.module.css';
const Button = (props) => {
  return (
    <button type={props.buttonType} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
