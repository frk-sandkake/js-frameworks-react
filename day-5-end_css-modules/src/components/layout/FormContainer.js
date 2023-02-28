import styles from './FormContainer.module.css';

const FormContainer = (props) => {
  return (
    <div className={styles.formContainer}>
      {/*Remember .children it will render whatever is between*/}
      {/*the opening and closing tag*/}
      {props.children}
    </div>
  );
};

export default FormContainer;
