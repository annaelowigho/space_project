import React from 'react'
import Crew from '../../components/CrewComponent/Crew'  


const CrewFlight = () => {
  return (
    <>
        <main>
        <Crew 
            image={"/assets/crew/image-anousheh-ansari.webp"}
            title={"FLIGHT ENGINEER"}
            name={"ANOUSHEH ANSARI"}
            description={`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
            Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, 
            and the first Iranian in space. `}
        />
        </main>

    </> 
  )
}

export default CrewFlight