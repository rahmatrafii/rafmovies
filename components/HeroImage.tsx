import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "./Button";
import { useRouter } from "next/navigation";
const HeroImage = ({ movie }: any) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/movie/" + movie.id);
  };
  return (
    <div className="relative w-full  rounded-md md:h-[450px] bg-red-400 overflow-hidden shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.original_title}
        className="relative h-full w-full object-cover z-[1]"
      />
      <div className="absolute h-full top-0 flex flex-col items-start text-white left-0 bottom-0 w-[70%]  bg-gradient-to-r from-slate-900 to-transparent z-[2] p-3 md:p-10">
        <h1 className="lg:text-[40px] sm:text-[24px] md:text-[30px] text-[16px] font-bold">
          {movie.original_title}
        </h1>
        <p className="text-slate-100 sm:hidden text-xs md:text-sm lg:text-base my-3">
          {`${movie.overview.slice(0, 50)}...`}
        </p>
        <p className="text-slate-100 hidden sm:block text-xs md:text-sm lg:text-base my-3">
          {`${movie.overview.slice(0, 180)}...`}
        </p>
        <div className="flex gap-x-5 flex-col sm:flex-row gap-y-3">
          <Button
            title="Watch Now"
            styles="hover:bg-color2 bg-color3 hover:shadow-md hover:shadow-color3"
            onClick={handleClick}
          >
            <PlayCircleOutlineIcon />
          </Button>
          <Button styles="Navbackground hover:shadow-md " title="WatchList">
            <AddCircleOutlineIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HeroImage;
