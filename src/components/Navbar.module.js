const Navbar = () => {
  return (
    <header>
      <nav className="py-2 lg:px-14 px-4 bg-slate-50 text-slate-800">
        <div className="flex justify-between items-center text-base gap-8">
          <div>
            <h1 className=" font-extrabold">.Reciper</h1>
          </div>
          
            <ul className="flex gap-10">
              <li>Home</li>
              <li>Search</li>
              <li>Share your idea</li>
            </ul>
          
            <button className="bg-[#1D2939] text-slate-50 py-2 px-5 rounded-lg  transition-all duration-300 border-2 border-slate-800 hover:text-slate-800 hover:bg-slate-50 ">Subscribe</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
