import Link from "next/link";
import ButtonPrimary from "./ui/buttonPrimary";
import { LiaSearchSolid } from "react-icons/lia";


const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 w-full h-14 px-4 lg:px-16 flex items-center  bg-slate-50 text-slate-800 border-b z-20">
        <div className="flex w-full justify-between items-center mx-auto text-base gap-8">
          <div>
            <h1 className="text-xl font-extrabold">.Reciper</h1>
          </div>
          <ul className="flex items-center gap-10">
            <Link href="/">Home</Link>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span>
              <LiaSearchSolid className="absolute translate-y-[70%] translate-x-[70%]"/>
              </span>

              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </ul>

          <ButtonPrimary text="Subscribe" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
