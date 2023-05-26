import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import CarouselNew from "./components/CarouselNew";
import LandPagerest from "./components/LandPagerest";

function App() {
  return (
    <><div >
      <Navbar />
      
      {/* <Carousel /> */}

    </div >
    
    <div>
    <CarouselNew/>
    <LandPagerest/>
      </div>
      </>
    
  );
}

export default App;
