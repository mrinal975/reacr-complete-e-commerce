import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MyState from "./context/data/myState";
import NoPage from "./pages/noPage/NoPage";
import Order from "./pages/order/Order";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

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
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </MyState>
    </>
  );
}

export default App;
