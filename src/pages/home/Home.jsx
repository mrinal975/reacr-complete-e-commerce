import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";

function Home() {
  const context = useContext(MyContext);
  return (
    <>
      <Layout>
        <HeroSection />
        <Category />
      </Layout>
    </>
  );
}

export default Home;
