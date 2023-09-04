import React from "react";
import { Link } from "react-router-dom";
import Desti from "../../components/DestiComp/Desti";
// import "../../styles/destination.css"


const index = () => {
  return (
    <>
      <main>
        <Desti
          title={"Moon"}
          image={"/assets/destination/image-moon.webp"}
          description={`  See our planet as you've never seen it before. 
            A perfect relaxing trip away to help regain perspective 
            and come back refreshed. While you're there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.`}
            estimatedTime={"3 DAYS"}
            averageDistance={"384,400 km"}
        />
      </main>
    </>
  );
};

export default index;
