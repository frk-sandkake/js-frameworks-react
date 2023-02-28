import styles from './Input.module.css'
const Input = (props) => {
  return (
    <input placeholder={props.placeholder} className={styles.input}/>

  );
};

export default Input;
