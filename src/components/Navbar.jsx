const Navbar = ({ products }) => {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
      <h1 className="text-sm font-bold md:text-xl text-slate-300">
        Inventory App
      </h1>
      <span className="flex justify-center items-center w-7 h-7  rounded-full bg-slate-500 border-2 font-bold border-slate-300 text-slate-300">
        {products.length}
      </span>
    </div>
  );
};

export default Navbar;
