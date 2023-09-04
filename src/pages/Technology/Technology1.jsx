import React from 'react'
import Technology from '../../components/TechnologyComp/Technology'

const Technology1 = () => {
  return (
    <>
        <main>
            <Technology 
            image={"/assets/technology/image-spaceport-landscape.jpg"}
            image2={"/assets/technology/image-spaceport-portrait.jpg"}
            title={"THE TERMINOLOGY…"}
            name={"SPACEPORT"}
            description={`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
            by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, 
            our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`} />
        </main>
    </>
  )
}

export default Technology1