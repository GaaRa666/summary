import React, { useState } from "react";
import { useRef } from "react";

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
  const reportTemplateRef = useRef(null);

  return (
    <div ref={reportTemplateRef}>
      <MainContext.Provider value={[mainData, setMainData]}>
        <Layout>
          <Header reportTemplateRef={reportTemplateRef} />
          <Body />
          <Footer />
        </Layout>
      </MainContext.Provider>
    </div>
  );
};
export default Main;
