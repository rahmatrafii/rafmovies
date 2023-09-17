import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NavSearch from "@/components/NavSearch";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="md:ml-[70px]">
        <NavSearch />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
