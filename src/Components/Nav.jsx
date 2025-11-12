import React from "react";
import NavBar from "./NavBar"
import Banner from "./Banner";

function Home() {
  return (
 <div style={{ position: "relative" }}>
      
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
          width:"100%",
          zIndex: 10,
          display: "flex",
          
          
        }}
      >
        <NavBar />
      </div>

    
      <Banner />
    </div>
  );
}

export default Home;
