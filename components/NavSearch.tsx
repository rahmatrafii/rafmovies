"use client";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const NavSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (query.length <= 3) {
      return alert("masukkan dulu");
    } else {
      router.push(`/search?search=${encodeURIComponent(query)}`);
    }
  };
  return (
    <section className=" pt-4">
      <div className="container mx-auto px-4">
        <div className="relative w-full flex-col sm:flex-row justify-between mb-5 flex items-center">
          <h1 className="lg:text-[40px] my-2 sm:text-[25px] text-[20px] text-color3 ">
            RafMovies
          </h1>
          <form
            className="py-2 px-2 flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search your Movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="Navbackground sm:w-[300px] lg:w-[400px] xl:w-[600px] sm:px-5 px-3 py-4 h-[36px] md:h-[40px] border-none bg-slate-100 rounded-sm focus:outline-none focus:border-none shadow-lg active:outline-none active:border-none hover:shadow-color3 transition-all mr-4 text-slate-100 text-[16px]"
            />
            <button
              type="submit"
              className="Navbackground h-[36px] text-slate-100 p-4 flex justify-center items-center rounded hover:shadow-md transition duration-300 hover:shadow-color3"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NavSearch;
