import React from 'react'
import Crew from '../../components/CrewComponent/Crew'
// import "../../styles/crew.css"


const CrewMission = () => {
  return (
    <>
    <main>
        <Crew 
            image={"/assets/crew/image-mark-shuttleworth.webp"}
            title={"MISSION SPECIALIST"}
            name={"MARK SHUTTLEWORTH"}
            description={`Mark Richard Shuttleworth is the founder and CEO of Canonical, 
            the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African 
            to travel to space as a space tourist.`}
        />
    </main>

  </>
  )
}

export default CrewMission