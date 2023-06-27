import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/Navbar.css'
import { randomizer } from '../utils/randomizer';
import { BsFillDice6Fill } from "react-icons/bs";
import { IoIosRefreshCircle } from "react-icons/io";


const Navbar = (props) => {

  const Characters = [
    "Bodvar",
    "Cassidy",
    "Orion",
    "Lord Vraxx",
    "Gnash",
    "Queen Nai",
    "Hattori",
    "Sir Roland",
    "Scarlet",
    "Thatch",
    "Ada",
    "Sentinel",
    "Lucien",
    "Teros",
    "Brynn",
    "Asuri",
    "Barraza",
    "Ember",
    "Azoth",
    "Koji",
    "Ulgrim",
    "Diana",
    "Jhala",
    "Kor",
    "Wu Shang",
    "Val",
    "Ragnir",
    "Cross",
    "Mirage",
    "Nix",
    "Mordex",
    "Yumiko",
    "Artemis",
    "Caspian",
    "Sidra",
    "Xull",
    "Kaya",
    "Isaiah",
    "Jiro",
    "Lin Fei",
    "Zariel",
    "Rayman",
    "Dusk",
    "Fait",
    "Thor",
    "Petra",
    "Vector",
    "Volkov",
    "Onyx",
    "Jaeyun",
    "Mako",
    "Magyar",
    "Reno",
    "Munin",
    "Arcadia",
    "Ezio",
    "Tezca",
    "Thea",
    "Red Raptor",
  ];


  const handleGenerate = () => {
    const randomElement = randomizer(Characters);
    props.setCharacter(randomElement);
    console.log(randomElement);
  }



  return (
    <div className="navbar">
      <div className="leftSide">
        <h1>RANDOMHALLA</h1>
        <BsFillDice6Fill className='logo' />
      </div>

      <div className="center">
        <input type="submit" value="Generate" onClick={handleGenerate} />
        <IoIosRefreshCircle className='logo' />
      </div>

    </div>
  )
}

export default Navbar