import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

function Home() {
  const context = useContext(MyContext);
  return (
    <>
      <Layout>
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
