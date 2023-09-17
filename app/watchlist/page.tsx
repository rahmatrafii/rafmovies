import ContentWatchList from "@/components/ContentWatchList";

export const metadata = {
  title: "wishlist",
};
const wishlist = () => {
  return (
    <section className="min-h-[600px] pb-20">
      <div className=" mx-auto px-4">
        <ContentWatchList />
      </div>
    </section>
  );
};
export default wishlist;
