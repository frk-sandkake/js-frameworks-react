import styles from './FormHeading.module.css'

const FormHeading = (props) => {
  return (
    <h3 className={styles.heading}>
      {props.children}
    </h3>
  );
};

export default FormHeading;
