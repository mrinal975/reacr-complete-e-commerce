import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  const context = useContext(MyContext);
  return (
    <>
      <Layout>
        <HeroSection />
        <Category />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </>
  );
}

export default Home;
