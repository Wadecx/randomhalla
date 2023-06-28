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

  const Weapons = [
    {
      name: 'Axe',
      path: 'weaponImg/axe.png'
    },
    {
      name: 'Blasters',
      path: 'weaponImg/blasters.png'
    },
    {
      name: 'Battle Boots',
      path: 'weaponImg/boots.png'
    },
    {
      name: 'Bow',
      path: 'weaponImg/bow.png'
    },
    {
      name: 'Cannon',
      path: 'weaponImg/cannon.png'
    },
    {
      name: 'Gauntlets',
      path: 'weaponImg/gauntlets.png'
    },
    {
      name: 'Great Sword',
      path: 'weaponImg/greatsword.png'
    },
    {
      name: 'Hammer',
      path: 'weaponImg/hammer.png'
    },
    {
      name: 'Katars',
      path: 'weaponImg/katars.png'
    },
    {
      name: 'Orb',
      path: 'weaponImg/orb.png'
    },
    {
      name: 'Rocket Lance',
      path: 'weaponImg/rocket.png'
    },
    {
      name: 'Scythe',
      path: 'weaponImg/scythe.png'
    },
    {
      name: 'Spear',
      path: 'weaponImg/spear.png'
    },
    {
      name: 'Sword',
      path: 'weaponImg/sword.png'
    },
  ]


  const handleGenerate = () => {
    const randomElement = randomizer(Characters);
    props.setCharacter(randomElement);
    props.setWeapon();
    console.log(randomElement);
  }

  const handleWeapon = () => {
    const randomElement = randomizer(Weapons);
    props.setWeapon(randomElement.name);
    props.setWeaponPath(randomElement.path);
    props.setCharacter();
    console.log(randomElement);
  }



  return (
    <div className="navbar">
      <div className="leftSide">
        <h1>RANDOMHALLA</h1>
        <BsFillDice6Fill className='logo' />
      </div>

      <div className="center">
        <input type="submit" value="Generate Legend" onClick={handleGenerate} />
        <input type="submit" value="Generate Weapon" onClick={handleWeapon} />
      </div>

    </div>
  )
}

export default Navbar