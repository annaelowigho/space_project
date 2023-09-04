import React from 'react'
import Crew from "../../components/CrewComponent/Crew";
// import "../../styles/crew.css"


const index = () => {
  return (
    <>
      <main>
          <Crew 
              image={"assets/crew/image-douglas-hurley.webp"}
              title={"COMMANDER"}
              name={"DOUGLAS HURLEY"}
              description={`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
              and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`}
          />
      </main>

    </>
  )
}

export default index