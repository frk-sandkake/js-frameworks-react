import styles from './LoginButton.module.css' // they call this local styles
// you could name the styles variable anything you want!!

const LoginButton = () => {
  return (
    <button className={styles.button}>
      Log in
    </button>
  );
};

export default LoginButton;
