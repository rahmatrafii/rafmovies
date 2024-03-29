import Image from "next/image";
import Link from "next/link";
import star from "@/public/star.svg";
interface MovieCardType {
  movie: any;
  styles?: string;
}
const MovieCard = (props: MovieCardType) => {
  const { movie, styles } = props;
  return (
    <div
      className={`${styles}  h-[190px]  md:h-[240px] lg:h-[265px] xl:h-[300px] rounded-lg overflow-hidden m-2 hover:shadow-md hover:shadow-color3 transition-all duration-300 bg-slate-800`}
    >
      <Link href={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.original_title}
          className="w-full h-[65%]  object-cover"
        />
      </Link>
      <div className="p-[5px] h-[30%] flex flex-col justify-start items-start md:p-3">
        <div className="flex items-center gap-x-1 mb-1">
          <Image
            src={star}
            width={20}
            height={20}
            className="md:w-[25px] md:h-[25px] xl:w-[30px] xl:h-[30px]"
            alt="star"
          />
          <span className="text-white text-xs md:text-sm xl:text-base">
            {movie.vote_average !== undefined && movie.vote_average.toFixed(1)}
          </span>
        </div>
        <h1 className="text-white text-xs md:text-sm xl:text-base">
          {movie.original_title !== undefined &&
            movie.original_title.slice(0, 20)}
        </h1>
      </div>
    </div>
  );
};
export default MovieCard;
