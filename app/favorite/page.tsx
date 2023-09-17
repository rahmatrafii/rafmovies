import ContentFavorite from "@/components/ContentFavorite";
import NavSearch from "@/components/NavSearch";
export const metadata = {
  title: "Favorite",
};
const Favorite = () => {
  return (
    <div>
      <section className=" min-h-[600px] pb-20">
        <div className="w-full mx-auto px-4">
          <ContentFavorite />
        </div>
      </section>
    </div>
  );
};
export default Favorite;
