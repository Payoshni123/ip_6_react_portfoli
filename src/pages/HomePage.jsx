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
          username={"FlaSH514"}
          email={"amitbabaninayak@gmail.com"}
          link={"https://github.com/"}
        />
        <ProfileInfo
          name={"Instagram"}
          username={"amit"}
          email={"amitbabaninayak@gmail.com"}
          link={"https://instagram.com/"}
        />
        <ProfileInfo
          name={"Facebook"}
          username={"Amit Nayak"}
          email={"amitbabaninayak@gmail.com"}
          link={"https://facebook.com/"}
        />
      </div>
    </>
  );
};
export default Home;
