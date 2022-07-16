import Button from "../../shared/button";
import InputText from "../../shared/inputText";
import styles from "./search.module.scss";
const Search = () => {
  return (
    <div className={styles.container}>
      <InputText />
      <div className={styles.button}>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Search;
