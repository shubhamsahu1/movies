import Image from "../../shared/image/image";
import styles from "./movieCard.module.scss";
const MovieCard = ({data}) => {
  return (
    <div className={styles.container}>
      <h3>{data.Title}</h3>
      <Image src={data.Poster} alt={data.Title} />
    </div>
  );
};

export default MovieCard;
