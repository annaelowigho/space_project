import React from 'react'
import Crew from '../../components/CrewComponent/Crew'
// import "../../styles/crew.css"


const CrewPilot = () => {
  return (
    <>
    <main>
        <Crew 
            image={"/assets/crew/image-victor-glover.webp"}
            title={"PILOT"}
            name={"VICTOR GLOVER"}
            description={`Pilot on the first operational flight of the SpaceX 
            Crew Dragon to the International Space Station. 
            Glover is a commander in the U.S. Navy where he pilots an F/A-18.
            He was a crew member of Expedition 64, and served as a station systems flight engineer.`}
        />
    </main>

  </>   
  )
}

export default CrewPilot