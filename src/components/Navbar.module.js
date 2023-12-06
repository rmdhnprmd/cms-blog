import ButtonPrimary from "./ui/buttonPrimary";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 w-full h-14 px-4 lg:px-16 flex items-center  bg-slate-50 text-slate-800 border-b">
        <div className="flex w-full justify-between items-center mx-auto text-base gap-8">
          <div>
            <h1 className="text-xl font-extrabold">.Reciper</h1>
          </div>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>Search</li>
            <li>Share your idea</li>
          </ul>

          <ButtonPrimary text="Subscribe" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
