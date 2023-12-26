import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <HomeMenu />
    </React.Fragment>
  );
};

export default Home;
