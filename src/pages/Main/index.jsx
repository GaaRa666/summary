import React, { useEffect, useState } from "react";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

import "./style.css";

const data = {
  name: "Jonh Smith",
  location: "Portland, Oregon, USA",
  skills: [
    {
      name: "php",
      years: 2,
    },
  ],
};

export const MainContext = React.createContext();

const Main = () => {
  const [mainData, setMainData] = useState(data);

  console.log("mainData", mainData);

  return (
    <MainContext.Provider value={[mainData, setMainData]}>
      <Layout>
        <Header />
        <Body />
        <Footer />
      </Layout>
    </MainContext.Provider>
  );
};
export default Main;
