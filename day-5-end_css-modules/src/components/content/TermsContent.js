import styles from './TermsContent.module.css' // they call this local styles
// they only apply in this specific component

const TermsContent = () => {
  return (
    <p className={styles.terms}>
      Aenean scelerisque dignissim sapien eget fringilla. Maecenas blandit sem id lectus pulvinar, vel ornare
      neque convallis. Vivamus vulputate tincidunt metus. Donec vitae pellentesque nisi. In sit amet pretium
      augue, vitae accumsan urna. Curabitur maximus congue odio sed egestas. Vivamus id consequat leo. Vestibulum
      non malesuada tortor. Sed enim arcu, accumsan id lorem ac, gravida consectetur nisl. Nullam vulputate
      malesuada tempus. Nullam rutrum risus et sagittis scelerisque. Etiam vel nisl non enim lobortis elementum.
    </p>
  );
};

export default TermsContent;
