import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";

function Home() {
  const context = useContext(MyContext);
  const { name, study } = context;
  return (
    <>
      <Layout>
        <h1>Name: {name}</h1>
        <h1>Age: {study}</h1>
      </Layout>
    </>
  );
}

export default Home;
