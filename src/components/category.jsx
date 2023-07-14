import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CategoryForm = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);

  const [categoryForm, setCategoryForm] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setCategoryForm({ ...categoryForm, [name]: value });
  };

  const addCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryForm,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    setCategories((prevState) => [...prevState, newCategory]);
    setCategoryForm({
      category_title: "",
      category_description: "",
    });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
    // setCategoryForm({
    //   category_title: "",
    //   category_description: "",
    // });
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`}>
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form
          onSubmit={addCategoryHandler}
          className="p-4 bg-slate-700 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label
              htmlFor="category-title"
              className="text-slate-400 block mb-1"
            >
              Title
            </label>
            <input
              required={true}
              onChange={changeHandler}
              type="text"
              name="title"
              value={categoryForm.title || ""}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="text-slate-400 block mb-1"
            >
              Description
            </label>
            <textarea
              required={true}
              onChange={changeHandler}
              type="text"
              name="description"
              value={categoryForm.description || ""}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full resize-none"
            />
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 border bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        } `}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Add New Category
      </button>
    </section>
  );
};

export default CategoryForm;
