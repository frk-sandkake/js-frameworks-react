import styles from './Button.module.css'
import dangerStyles from './Danger.module.css'

const Button = (props) => {

  let extraClass = null;
  if (props.variant === "danger") {
    extraClass = dangerStyles.danger;
  }
  return ( // i am using template literals ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    <button className={`${styles.button} ${extraClass}`}>
      {props.children}
    </button>
  );
};

export default Button;
