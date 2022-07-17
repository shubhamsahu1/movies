import {useSelector} from "react-redux";
import {loaderValue} from "../../store/slice/loaderSclice";
import styles from "./loader.module.scss";
const Loader = () => {
  const loader = useSelector(loaderValue);
  return (
    <>
      {loader > 0 && (
        <div className={styles.container}>
          <div className={styles.loading}>loading...</div>
        </div>
      )}
    </>
  );
};

export default Loader;
