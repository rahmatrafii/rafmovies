import { getDetailMovie } from "@/utils";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import star from "@/public/star.svg";
import Image from "next/image";
import ButtonWatchList from "@/components/ButtonWatchList";
import ButtonLove from "@/components/ButtonLove";
export const metadata = {
  title: "Movie",
};

const MovieDetail = async ({ params }: { params: { movieId: string } }) => {
  const movieId: string = params.movieId;
  const data = await getDetailMovie(movieId);
  const year = data.release_date.split("-");

  return (
    <section className="pb-20 md:ml-[190px]">
      <div className="container  mx-auto px-4">
        <div className="relative my-6 h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt=""
            className="absolute w-full object-cover h-full rounded-lg z-[1]"
          />
          <PlayCircleOutlineIcon className="absolute absolute-centered text-[90px] md:text-[110px] hover:scale-125 transition duration-300 text-white font-bold cursor-pointer z-[3]" />
        </div>

        <div className="w-[100%] mb-5">
          <div className="flex justify-between items-start">
            <h1 className="md:text-3xl text-2xl text-white font-bold mb-4 mr-10 xl:text-4xl">
              {data.original_title}{" "}
              <span className="font-light">({year[0]})</span>
            </h1>
            <ButtonLove id={data.id} />
          </div>

          <div className="mb-5">
            <div className="flex w-[80%] flex-wrap">
              {data.genres.map((item: { id: number; name: string }) => (
                <span
                  key={item.id}
                  className="border  mb-5 border-white text-white px-3 rounded-full text-xs py-1 mr-5"
                >
                  {item.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-x-1 mb-5">
              <Image
                src={star}
                width={30}
                height={30}
                className=" xl:w-[50px] xl:h-[50px]"
                alt="star"
              />
              <span className="text-white text-lg ">
                {data.vote_average.toFixed(1)}
              </span>
            </div>

            <div className="text-white mb-5 text-base lg:w-[60%]">
              <p>{data.overview}</p>
            </div>
          </div>

          <div className="flex w-full justify-end lg:justify-start">
            <ButtonWatchList
              styles="hover:bg-color2 bg-color3 hover:shadow-md hover:shadow-color3 whitespace-nowrap md:px-8  md:py-3 py-1 px-3 flex items-center gap-x-3 transition duration-300  border-none rounded-sm shadow-md text-[14px] text-white"
              id={data.id}
            >
              WatchList
            </ButtonWatchList>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieDetail;
