import React from 'react'
import Desti from '../../components/DestiComp/Desti'
// import "../../styles/destination.css"

const DestinationEuropa = () => {
  return (
    <Desti title={"Europa"}
    description={`Don’t forget to pack your hiking boots. 
    You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
    It’s two and a half times the size of Everest!`}
    image={"/assets/destination/image-europa.webp"}
    averageDistance={"628 MIL. KM"}
    estimatedTime={"3 years"}/>
  )
}

export default DestinationEuropa