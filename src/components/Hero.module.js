const Hero = () => {
  return (
    <div className="bg-slate-100 text-slate-800 pt-40 pb-20 max-h-screen h-screen">
      <div className="flex flex-col items-center justify-center px-8 text-center mt-24">
        <h1 className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600 mb-6 lg:w-1/3">
          The goldiest secret receipe.
        </h1>
        <div className="text-3xl border-[1px] border-slate-800 px-4 pt-2 pb-2 w-fit rounded-md">
          Let we try your taste 👋
        </div>
      </div>
    </div>
  );
};

export default Hero;
