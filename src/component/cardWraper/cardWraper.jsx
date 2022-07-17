import {useSelector} from "react-redux";
import Pagination from "../../shared/pagination/pagination";
import {searchResult, searchPage} from "../../store/slice/searchSlice";
import MovieCard from "../movieCard/movieCard";
import styles from "./cardWraper.module.scss";
const CardWraper = (props) => {
  const searchData = useSelector(searchResult);
  const currentPage = useSelector(searchPage);
  return (
    <>
      {searchData.Search && (
        <div className={styles.container}>
          <div className={styles.cards}>
            {searchData.Search &&
              searchData.Search.map((e) => {
                return <MovieCard key={e.imdbID} data={e} />;
              })}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPge={Math.ceil(searchData.totalResults / 10)}
          />
        </div>
      )}
    </>
  );
};

export default CardWraper;
