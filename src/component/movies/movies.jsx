import CardWraper from "../cardWraper/cardWraper";
import Search from "../search/search";
import styles from "./movies.module.scss";
const Movies = () => {
  return (
    <div className={styles.container}>
      <Search />
      <CardWraper />
    </div>
  );
};

export default Movies;
