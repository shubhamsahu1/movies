import {useSelector} from "react-redux";
import {searchResult} from "../../store/slice/searchSlice";
import MovieCard from "../movieCard/movieCard";
import styles from "./cardWraper.module.scss";
const CardWraper = (props) => {
  const searchData = useSelector(searchResult);
  console.log(searchData);
  return (
    <>
      {searchData.Search && (
        <div className={styles.container}>
          {searchData.Search &&
            searchData.Search.map((e) => {
              return <MovieCard key={e.imdbID} data={e} />;
            })}
        </div>
      )}
    </>
  );
};

export default CardWraper;
