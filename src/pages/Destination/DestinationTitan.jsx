import React from 'react'
import Desti from '../../components/DestiComp/Desti'
// import "../../styles/destination.css"


const DestinationTitan = () => {
    return (
      <Desti title={"Titan"}
      description={`The only moon known to have a dense atmosphere other than Earth, 
      Titan is a home away from home (just a few hundred degrees colder!). 
      As a bonus, you get striking views of the Rings of Saturn.`}
      image={"/assets/destination/image-titan.webp"}
      averageDistance={"1.6 BIL. KM"}
      estimatedTime={"7 years"}/>



      
    )
  }
  
export default DestinationTitan