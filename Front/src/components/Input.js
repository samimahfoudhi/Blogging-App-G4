import React from "react";
import axios from "axios";
import { useState } from "react";
const Input = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");
  const [count, setCount] = useState("");
  const [age, setAge] = useState();
  const [mail, setMail] = useState("");
  const [passw, setPassw] = useState("");
  const signUp = () => {
    let profil = {};
    if (first !== "") {
      profil.firstname = first;
    }
    if (last !== "") {
      profil.lastname = last;
    }
    if (user !== "") {
      profil.username = user;
    }
    if (count !== "") {
      profil.country = count;
    }
    if (mail !== "") {
      profil.email = mail;
    }
    if (passw !== "") {
      profil.password = passw;
    }
    if (age !== 0) {
      profil.age = age;
    }
    axios
      .post("http://localhost:7000/createprofil", profil)
      .then((response) => console.log("done"))
      .catch((error) => {
        console.error("Error signing up:", error);
      });
    axios
      .post("http://localhost:7000/createuser", profil)
      .then((response) => console.log("done"))
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };
  return (
    <div>
      <h1>SIGN UP PAGE</h1>
      <input
        type="text"
        placeholder="firstname"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="lastname"
        onChange={(e) => {
          setLast(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="country"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <br />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassw(e.target.value);
        }}
      />
      <br />
      <button onClick={signUp}> Sign Up</button>
    </div>
  );
};

export default Input;
