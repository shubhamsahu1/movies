import PageTile from "./pageTile";
import styles from "./pagination.module.scss";
const Pagination = ({currentPage, totalPge}) => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      {pages.map((page) => {
        return (
          <PageTile key={page} num={page} selected={currentPage === page} />
        );
      })}
    </div>
  );
};

export default Pagination;
