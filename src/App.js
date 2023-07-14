//import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import HomePage from "./Pages/HomePage";
// import Carts from "./Pages/Carts";
// import Contact from "./Pages/Contact";
// import CartProvider from "./components/Providers/CartProvider";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import CheckOut from "./Pages/CheckOut";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import AuthProvider from "./components/Providers/AuthProvider";
// import Profile from "./Pages/Profile";
// import NotFound from "./Pages/404/NotFound";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsForm from "./components/Product";
import CategoryForm from "./components/category";
import ProductList from "./components/ProductList";
import FilterProduct from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [categorySortValue, setCategorySortValue] = useState("all");

  useEffect(
    () => {
      let result = products;
      result = sortFilter(result);
      result = searchFilter(result);
      result = categorySortFilter(result);
      setFilteredproducts(result);
    },
    // eslint-disable-next-line
    [products, sort, search, categorySortValue]
  );

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const categorySortHandler = (e) => {
    setCategorySortValue(e.target.value);
  };

  const categorySortFilter = (array) => {
    if (categorySortValue === "all") {
      return array;
    }
    return array.filter((item) => item.category === categorySortValue);
  };
  // console.log(categorySortValue);

  const sortFilter = (array) => {
    let sortedProducts = [...array];
    // eslint-disable-next-line
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const searchFilter = (array) => {
    const value = search;
    return array.filter((item) => item.title.toLowerCase().includes(value));
  };

  return (
    // <div className="App">
    //   <AuthProvider>
    //     <CartProvider>
    //       <ToastContainer />
    //       <Routes>
    //         <Route path="/" element={<Layout />}>
    //           <Route index element={<HomePage />} />
    //           <Route path="/carts" element={<Carts />} />
    //           <Route path="/contact" element={<Contact />} />
    //           <Route path="/checkout" element={<CheckOut />} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/signup" element={<SignUp />} />
    //           <Route path="/profile" element={<Profile />} />
    //           <Route path="*" element={<NotFound />} />
    //         </Route>
    //       </Routes>
    //     </CartProvider>
    //   </AuthProvider>
    // </div>
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar products={products} />
        <div className="container mx-auto p-4 max-w-screen-sm">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <FilterProduct
            categories={categories}
            onCategorySort={categorySortHandler}
            categorySortValue={categorySortValue}
            onSort={sortHandler}
            onSearch={searchHandler}
            search={search}
            sort={sort}
          />
          <ProductList
            products={filteredproducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
