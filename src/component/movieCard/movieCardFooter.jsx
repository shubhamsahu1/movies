import styles from "./movieCardFooter.module.scss";
const MovieCardFooter = ({yearOfRelease}) => {
  return (
    <div className={styles.container}>
      <p>year of Release {yearOfRelease}</p>
    </div>
  );
};

export default MovieCardFooter;
