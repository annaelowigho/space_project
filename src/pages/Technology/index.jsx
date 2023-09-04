import React from 'react'
import Technology from '../../components/TechnologyComp/Technology'


const index = () => {
  return (
    <> 
      <main>
        <Technology 
            image={"/assets/technology/image-launch-vehicle-landscape.jpg"}
            image2={"/assets/technology/image-launch-vehicle-portrait.jpg"}
            title={"THE TERMINOLOGY…"}
            name={"LAUNCH VEHICLE"}
            description={`A launch vehicle or carrier rocket is a rocket-propelled 
            vehicle used to carry a payload from Earth's surface to space, usually 
            to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
            Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`} />
      </main>
    
    </>
  )
}

export default index