const FilterProduct = ({
  onCategorySort,
  onSort,
  onSearch,
  search,
  sort,
  categories,
  categorySortValue,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          value={search}
          onChange={onSearch}
          name="search"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort"
          value={sort}
          onChange={onSort}
          id="sort-products"
          className="bg-transparent rounded-xl text-slate-400"
        >
          <option value="" className="bg-slate-500 text-slate-300">
            Select sort filter
          </option>
          <option value="latest" className="bg-slate-500 text-slate-300">
            latest
          </option>
          <option value="earliest" className="bg-slate-500 text-slate-300">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="product-category" className="text-slate-500 text-lg">
          category
        </label>
        <select
          required={true}
          name="category"
          id="product-category"
          value={categorySortValue}
          onChange={onCategorySort}
          className="bg-transparent rounded-xl text-slate-400"
        >
          <option value="all" className="bg-slate-500 text-slate-300">
            All
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
    </div>
  );
};

export default FilterProduct;
