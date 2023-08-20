import ContentWatchList from "@/components/ContentWatchList";
import NavSearch from "@/components/NavSearch";

export const metadata = {
  title: "wishlist",
};
const wishlist = () => {
  return (
    <section className="md:ml-[195px] min-h-[600px] pb-20">
      <div className="container mx-auto px-4">
        <NavSearch />
        <ContentWatchList />
      </div>
    </section>
  );
};
export default wishlist;
