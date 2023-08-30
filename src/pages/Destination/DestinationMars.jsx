import React from 'react'
import Desti from '../../components/DestiComp/Desti'

const DestinationMars = () => {
  return (
  <Desti title={"Mars"} 
  description={`Don’t forget to pack your hiking boots. 
  You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
  It’s two and a half times the size of Everest!`} 
  image={"/assets/destination/image-mars.webp"} 
  averageDistance={"225 MIL. KM"} 
  estimatedTime={"9 Months"} />
  )
}

export default DestinationMars