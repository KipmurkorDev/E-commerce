import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AddProduct from "./AddProduct/AddProduct";
import Products from "./Products/Products";
import Login from "./Login/Login";
import Contact from "./Navbar/Contact";
import { CartProduct } from "./Cart/Cart";
import Navbar from "./Navbar/Navbar";
import About from "./Navbar/About";
import Signup from "./Signup/signup";
function App() {
  const location=useLocation()

  return (
    <div className="App">
       
       {location.pathname !== '/' && location.pathname !== '/signup'? <Navbar /> : null}
        <Routes>
          <Route index element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/cart" element={<CartProduct />} />

          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/contacts" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
