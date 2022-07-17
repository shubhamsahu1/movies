import {useCallback, useEffect, useState} from "react";
import Button from "../../shared/button";
import InputText from "../../shared/inputText";
import {useDispatch} from "react-redux";
import styles from "./search.module.scss";
import {setInputStoreVal, fetchMovies} from "../../store/slice/searchSlice";
const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setInputVal("Batman");
    dispatch(setInputStoreVal("Batman"));
    dispatch(fetchMovies());
  }, [dispatch]);

  const onChange = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);
  const onClick = () => {
    //fire api

    dispatch(setInputStoreVal(inputVal));
    dispatch(fetchMovies());
  };
  const enter = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className={styles.container}>
      <InputText value={inputVal} onKeyPress={enter} onChange={onChange} />
      <div className={styles.button}>
        <Button onClick={onClick}>Search</Button>
      </div>
    </div>
  );
};

export default Search;
