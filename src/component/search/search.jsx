import {useCallback, useState} from "react";
import Button from "../../shared/button";
import InputText from "../../shared/inputText";
import styles from "./search.module.scss";
const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const onChange = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);
  return (
    <div className={styles.container}>
      <InputText value={inputVal} onChange={onChange} />
      <div className={styles.button}>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Search;
