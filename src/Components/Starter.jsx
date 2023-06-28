import React from 'react'
import { useEffect } from 'react'
import { gsap } from "gsap";
import '../assets/Starter.css'

const Starter = (props) => {

  const handleIsLogged = () => {
    props.setIsLogged(true);
  }

  useEffect(() => {
    gsap.to(".start", {
      y: 500,
      duration: 1,
    })


  }, [])  
  return (
    <div className="start">
        <h1>Let random do the job for you </h1>
        <input type="submit" value="GET STARTED" onClick={handleIsLogged}/>
    </div>
  )
}

export default Starter