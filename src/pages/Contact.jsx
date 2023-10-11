import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { useNavigate } from "react-router";
const Contact = () => {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [age, setAge] = useState("");
  return (
    <form action="" method="post">
      <input
        type="text"
        name="FirstName"
        placeholder="First Name"
        onChange={(event) => {
          setFName(event.target.value);
        }}
      />
      <input
        type="text"
        name="LastName"
        placeholder="Last Name"
        onChange={(event) => {
          console.log(event);
          setLName(event.target.value);
        }}
      />
      <input
        type="text"
        name="Age"
        placeholder="Age"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/greeting", { state: { fname, lname } });
        }}
      >
        Submit!
      </button>
    </form>
  );
};
export default Contact;
