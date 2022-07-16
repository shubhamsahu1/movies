import styles from "./wraper.module.scss";
const BodyWraper = (prop) => {
  return <div className={styles.wraper}>{prop.children}</div>;
};

export default BodyWraper;
