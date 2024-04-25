import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";

function Home() {
  const context = useContext(MyContext);
  return (
    <>
      <Layout>
        <h1>OOp</h1>
      </Layout>
    </>
  );
}

export default Home;
