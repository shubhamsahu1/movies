import {useDispatch} from "react-redux";
import {fetchMovies, setPage} from "../../store/slice/searchSlice";
import Button from "../button";
import PageTile from "./pageTile";
import styles from "./pagination.module.scss";

const claculatePages = (currentPage, totalPge) => {
  const pages = [];
  let countRight = 0;
  for (let i = 0; i <= 4; i++) {
    if (currentPage - i > 0) {
      pages.unshift(currentPage - i);
    } else {
      countRight++;
    }
  }
  for (let i = 1; i <= 6 + countRight; i++) {
    if (currentPage + i <= totalPge) {
      pages.push(currentPage + i);
    }
  }
  return pages;
};

const Pagination = ({currentPage, totalPge}) => {
  const dispatch = useDispatch();
  const pages = claculatePages(currentPage, totalPge);
  const previous = (cp) => {
    dispatch(setPage(cp - 1));
    dispatch(fetchMovies());
  };
  const next = (cp) => {
    dispatch(setPage(cp + 1));
    dispatch(fetchMovies());
  };
  return (
    <div className={styles.container}>
      <Button
        className={styles.buttonClass}
        onClick={() => previous(currentPage)}
      >
        Previous
      </Button>
      {pages.map((page) => {
        return (
          <PageTile key={page} num={page} selected={currentPage === page} />
        );
      })}
      <Button className={styles.buttonClass} onClick={() => next(currentPage)}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
