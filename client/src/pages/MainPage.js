import React, { useEffect } from "react";
import NavBar from "../components/NavBar.js";
import BodyLayout from "../components/BodyLayout.js";

function App() {

  const checkLogin = async () => {
    const response = await fetch("/auth",{
      method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    checkLogin().then((res) => {
      if(res.message!=="Authenticated user"){
        alert("Please login!");
        window.location.href="/login";
      }
    });
  });
  
  return (
    <>
      <NavBar />
      <BodyLayout key="body"/>
    </>
  );
}

export default App;
