const ButtonPrimary = (props) => {
  return (
    <button className="bg-[#1D2939] text-slate-50 py-2 px-5 rounded-lg  transition-all duration-300 border-[1px] border-slate-800 hover:text-slate-800 hover:bg-slate-50 ">
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
