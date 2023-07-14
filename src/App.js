//import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
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
import Navbar from "./components/Navbar";
import ProductsForm from "./components/Product";
import CategoryForm from "./components/category";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
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
        <Navbar />
        <div className="container mx-auto p-4 max-w-screen-sm">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <ProductList
            products={products}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
