const ProductList = ({ products, categories, setProducts }) => {
  const deleteProductHandler = (id) => {
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product List</h2>
      <div className="overflow-x-auto">
        {products &&
          products.map((product) => {
            return (
              <div
                className="flex items-center justify-between mb-2 w-full min-w-[400px]"
                key={product.id}
              >
                <span className="text-slate-400">{product.title}</span>
                <div className="flex items-center gap-x-3">
                  <span className="text-slate-400">
                    {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                  <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                    {categories.find((c) => c.id === product.category).title}
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                    {product.quantity}
                  </span>
                  <button
                    className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
                    onClick={() => deleteProductHandler(product.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
