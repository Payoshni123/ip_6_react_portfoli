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
          username={"dshreyash-108"}
          email={"dhasadeshreyu12@gmail.com"}
          link={"https://github.com/dshreyash-108"}
        />
        <ProfileInfo
          name={"Instagram"}
          username={"up_on_words_108"}
          email={"dhasadeshreyu12@gmail.com"}
          link={"https://instagram.com/"}
        />
        <ProfileInfo
          name={"Facebook"}
          username={"Shreyash Dhasade"}
          email={"dhasadeshreyu12@gmail.com"}
          link={"https://facebook.com/"}
        />
      </div>
    </>
  );
};
export default Home;
