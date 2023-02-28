import styles from './Container.module.css';

const Container = (props) => {
  return (
    <div className={styles.container}>
      {/*Remember .children it will render whatever is between*/}
      {/*the opening and closing tag*/}
      {props.children}
    </div>
  );
};

export default Container;
