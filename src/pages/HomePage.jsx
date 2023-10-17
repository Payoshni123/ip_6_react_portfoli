import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div style={{ marginLeft: 100 }}>
        <ProfileInfo
          name={"GitHub"}
          username={"Payoshni123"}
          email={"payoshnikhekale@gmail.com"}
          link={"https://github.com/Payoshni123"}
        />
        <ProfileInfo
          name={"Instagram"}
          username={"payoshnikhekale"}
          email={"payoshnikhekale@gmail.com"}
          link={"https://instagram.com/"}
        />
        
      </div>
    </>
  );
};
export default Home;
