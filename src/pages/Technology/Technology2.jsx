import React from 'react'
import Technology from '../../components/TechnologyComp/Technology'

const Technology2 = () => {
  return (
    <>
    <main>
        <Technology  
            image={"/assets/technology/image-space-capsule-landscape.jpg"}
            image2={"/assets/technology/image-space-capsule-portrait.jpg"}
            title={"THE TERMINOLOGY…"}
            name={"SPACE CAPSULE"}
            description={`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
            capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend 
            your time during the flight. It includes a space gym, cinema, and plenty of other activities 
            to keep you entertained.`} />
    </main>
    
    </>
  )
}

export default Technology2