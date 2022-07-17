import Image from "../../shared/image/image";
import styles from "./movieCard.module.scss";
import MovieCardFooter from "./movieCardFooter";
const MovieCard = ({data}) => {
  return (
    <div className={styles.container}>
      <h3>{data.Title}</h3>
      <div className={styles.poster}>
        <Image src={data.Poster} alt={data.Title} width={300} />
      </div>
      <MovieCardFooter yearOfRelease={data.Year} />
    </div>
  );
};

export default MovieCard;
