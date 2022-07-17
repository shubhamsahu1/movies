import {useSelector} from "react-redux";
import {searchResult} from "../../store/slice/searchSlice";
import MovieCard from "../movieCard/movieCard";
import styles from "./cardWraper.module.scss";
const CardWraper = (props) => {
  const searchData = useSelector(searchResult);
  console.log(searchData);
  return (
    <div className={styles.container}>
      <MovieCard />
    </div>
  );
};

export default CardWraper;
