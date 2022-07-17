import clsx from "clsx";
import {useDispatch} from "react-redux";
import Button from "../button";
import styles from "./pageTile.module.scss";
import {setPage, fetchMovies} from "../../store/slice/searchSlice";
const PageTile = ({num, selected}) => {
  const dispatch = useDispatch();
  const onClick = (val) => {
    if (!selected) {
      dispatch(setPage(val));
      dispatch(fetchMovies());
    }
  };
  const buttonClass = clsx(styles.pageButton, {[styles.selected]: selected});
  return (
    <Button
      color="secondary"
      className={buttonClass}
      onClick={() => onClick(num)}
    >
      {num}
    </Button>
  );
};

export default PageTile;
