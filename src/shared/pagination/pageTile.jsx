import clsx from "clsx";
import {useDispatch} from "react-redux";
import Button from "../button";
import styles from "./pageTile.module.scss";
const PageTile = ({num, selected}) => {
  const dispatch = useDispatch();
  const onClick = (val) => {
    dispatch();
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
