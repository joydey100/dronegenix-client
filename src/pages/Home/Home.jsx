import React from "react";
import Banner from "../../component/Banner/Banner";
import DroneGallery from "../../component/DroneGallery/DroneGallery";
import DroneList from "../../component/DroneList/DroneList";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Review from "../../component/Review/Review";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <DroneList />
      <Review />
      <DroneGallery />
      <Footer />
    </>
  );
};

export default Home;
