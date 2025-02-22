import React from "react";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Template from "../components/Template";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Carousal/>
      </div>
     <div className='m-3'>
      <Template/>
      <Template/>
      <Template/>
      <Template/>
     </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
