import ContentFavorite from "@/components/ContentFavorite";
import NavSearch from "@/components/NavSearch";
export const metadata = {
  title: "Favorite",
};
const Favorite = () => {
  return (
    <div>
      <section className="md:ml-[195px] min-h-[600px] pb-20">
        <div className="container mx-auto px-4">
          <NavSearch />
          <ContentFavorite />
        </div>
      </section>
    </div>
  );
};
export default Favorite;
