import ButtonPrimary from "./ui/buttonPrimary";

const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full">
      <div className="  px-4 lg:px-16 py-20">
        <div className="sm:w-full md:w-1/2 mx-auto flex flex-col justify-center items-center text-center gap-4">
          <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600 ">
            Personally Newsletter
          </h1>
          <p className=" text-slate-600">
            A bi-weekly newsletter of design inspiration, resources and anything
            related to career development.
          </p>
          <label className="flex justify-center">
            <input
              type="email"
              name="email"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block min-w-[250px] rounded-md rounded-r-none sm:text-sm focus:ring-1 text-slate-600 transition-all duration-300"
              placeholder="Email address"
            />
            <button className="bg-[#1D2939] text-slate-50 py-2 px-5 rounded-md rounded-l-none transition-all duration-300 border-[1px] border-slate-800 hover:text-slate-800 hover:bg-slate-50 ">
              Subscribe
            </button>
          </label>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="w-max mx-auto ">
          <h4 className="text-slate-400 text-xs">
            Copyright 2023 - rmdhnprmd
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
