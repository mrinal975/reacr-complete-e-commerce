import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MyState from "./context/data/myState";
import NoPage from "./pages/noPage/NoPage";
import Order from "./pages/order/Order";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </MyState>
    </>
  );
}

export default App;
