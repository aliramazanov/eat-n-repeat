import React from "react";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import { SectionHeaders } from "./components/layout/SectionHeaders";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <HomeMenu />
      <section className="text-center my-12">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="flex flex-col gap-4 max-w-3xl mx-auto mt-6">
          <p className=" text-gray-500">
            Immerse yourself in the art of handcrafted pizzas made with the
            finest ingredients, and let our warm ambiance and genuine
            hospitality transport you to the bustling piazzas. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In, autem! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime totam neque
            velit!
          </p>
          <p className="text-gray-500">
            Immerse yourself in the art of handcrafted pizzas made with the
            finest ingredients, and let our warm ambiance and genuine
            hospitality transport you to the bustling piazzas. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In, autem! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime totam neque
            velit!
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            similique.
          </p>
        </div>
      </section>
      <section>
        <div className="text-center my-8">
          <SectionHeaders
            subHeader={"Don't hesitate"}
            mainHeader={"Contact Us"}
          />
          <a href={"tel:+9945000000"} className="text-xl text-gray-500 mt-2">
            +994 77 500 00 00
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
