import Image from "../../shared/image/image";
import styles from "./movieCard.module.scss";
const MovieCard = ({data}) => {
  return (
    <div className={styles.container}>
      <h3>{data.Title}</h3>
      <div className={styles.poster}>
        <Image src={data.Poster} alt={data.Title} width={300} />
      </div>
    </div>
  );
};

export default MovieCard;
