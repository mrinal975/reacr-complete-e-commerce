import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const addCart = () => {
    dispatch(addToCart("Shirt"));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart("Shirt"));
  };
  const context = useContext(MyContext);
  return (
    <>
      <Layout>
        <div className="flex gap-5 justify-center">
          <button onClick={addCart}>Add</button>
          <button onClick={addCart}>Remove</button>
        </div>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
