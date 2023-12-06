const ButtonSmall = (props) => {
  return (
    <button className="px-3 py-1 bg-slate-100 rounded-md hover:bg-slate-800 hover:text-slate-100 transition-all duration-300">
      {props.text}
    </button>
  );
};

export default ButtonSmall;
