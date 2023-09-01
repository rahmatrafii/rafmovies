import ContentSearch from "@/components/ContentSearch";
import NavSearch from "@/components/NavSearch";
export const metadata = {
  title: "Search",
};
export default function Search() {
  return (
    <section className=" md:ml-[70px] pb-20">
      <div className="container mx-auto px-4">
        <NavSearch />
        <ContentSearch />
      </div>
    </section>
  );
}
