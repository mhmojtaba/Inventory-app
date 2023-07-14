import { useState } from "react";

const ProductsForm = ({ categories, setProducts }) => {
  const [productForm, setProductForm] = useState({
    title: "",
    quantity: "",
    category: "",
  });

  const productChangeHandler = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productForm,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductForm({
      title: "",
      quantity: "",
      category: "",
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form
        onSubmit={addProductHandler}
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            Title
          </label>
          <input
            required={true}
            onChange={productChangeHandler}
            id="-title"
            type="text"
            name="title"
            value={productForm.title || ""}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            required={true}
            onChange={productChangeHandler}
            id="product-quantity"
            type="number"
            name="quantity"
            value={productForm.quantity || ""}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            required={true}
            onChange={productChangeHandler}
            value={productForm.category || ""}
            name="category"
            id="product-category"
            className="bg-transparent rounded-xl  text-slate-400 w-full"
          >
            <option value="" className="bg-slate-500 text-slate-300">
              Select a category
            </option>
            {categories &&
              categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    value={category.id || ""}
                    className="bg-slate-500 text-slate-300"
                  >
                    {category.title}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            type="submit"
            className="flex-1 bg-slate-500 text-slate-200 py-2 rounded-xl "
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
