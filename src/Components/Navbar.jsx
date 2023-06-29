import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/Navbar.css'
import { randomizer } from '../utils/randomizer';
import { BsFillDice6Fill } from "react-icons/bs";
import { IoIosRefreshCircle } from "react-icons/io";


const Navbar = (props) => {

  const Characters = [
    {
      name: "Ada",
      path: "legendImg/ada.png"
    },
    {
      name: "Arcadia",
      path: "legendImg/arcadia.png"
    },
    {
      name: "Artemis",
      path: "legendImg/artemis.png"
    },
    {
      name: "Asuri",
      path: "legendImg/asuri.png"
    },
    {
      name: "Azoth",
      path: "legendImg/azoth.png"
    },
    {
      name: "Barraza",
      path: "legendImg/barraza.png"
    },
    {
      name: "Bodvar",
      path: "legendImg/bodvar.png"
    },
    {
      name: "Brynn",
      path: "legendImg/brynn.png"
    },
    {
      name: "Caspian",
      path: "legendImg/caspian.png"
    },
    {
      name: "Cassidy",
      path: "legendImg/cassidy.png"
    },
    {
      name: "Cross",
      path: "legendImg/cross.png"
    },
    {
      name: "Diana",
      path: "legendImg/diana.png"
    },
    {
      name: "Dusk",
      path: "legendImg/dusk.png"
    },
    {
      name: "Ember",
      path: "legendImg/ember.png"
    },
    {
      name: "Ezio",
      path: "legendImg/ezio.png"
    },
    {
      name: "Fait",
      path: "legendImg/fait.png"
    },
    {
      name: "Gnash",
      path: "legendImg/gnash.png"
    },
    {
      name: "Hattori",
      path: "legendImg/hattori.png"
    },
    {
      name: "Isaiah",
      path: "legendImg/isaiah.png"
    },
    {
      name: "Jaeyun",
      path: "legendImg/jaeyun.png"
    },
    {
      name: "Jhala",
      path: "legendImg/jhala.png"
    },
    {
      name: "Jiro",
      path: "legendImg/jiro.png"
    },
    {
      name: "Kaya",
      path: "legendImg/kaya.png"
    },
    {
      name: "Koji",
      path: "legendImg/koji.png"
    },
    {
      name: "Kor",
      path: "legendImg/kor.png"
    },
    {
      name: "Lin Fei",
      path: "legendImg/linfei.png"
    },
    {
      name: "Lord Vraxx",
      path: "legendImg/lordvraxx.png"
    },
    {
      name: "Lucien",
      path: "legendImg/lucien.png"
    },
    {
      name: "Magyar",
      path: "legendImg/magyar.png"
    },
    {
      name: "Mako",
      path: "legendImg/mako.png"
    },
    {
      name: "Mirage",
      path: "legendImg/mirage.png"
    },
    {
      name: "Mordex",
      path: "legendImg/mordex.png"
    },
    {
      name: "Munin",
      path: "legendImg/munin.png"
    },
    {
      name: "Nix",
      path: "legendImg/nix.png"
    },
    {
      name: "Onyx",
      path: "legendImg/onyx.png"
    },
    {
      name: "Orion",
      path: "legendImg/orion.png"
    },
    {
      name: "Petra",
      path: "legendImg/petra.png"
    },
    {
      name: "Queen Nai",
      path: "legendImg/queennai.png"
    },
    {
      name: "Ragnir",
      path: "legendImg/ragnir.png"
    },
    {
      name: "Rayman",
      path: "legendImg/rayman.png"
    },
    {
      name: "Red Raptor",
      path: "legendImg/redraptor.png"
    },
    {
      name: "Reno",
      path: "legendImg/reno.png"
    },
    {
      name: "Scarlet",
      path: "legendImg/scarlet.png"
    },
    {
      name: "Sentinel",
      path: "legendImg/sentinel.png"
    },
    {
      name: "Sidra",
      path: "legendImg/sidra.png"
    },
    {
      name: "Sir Roland",
      path: "legendImg/sirroland.png"
    },
    {
      name: "Teros",
      path: "legendImg/teros.png"
    },
    {
      name: "Tezca",
      path: "legendImg/tezca.png"
    },
    {
      name: "Thatch",
      path: "legendImg/thatch.png"
    },
    {
      name: "Thea",
      path: "legendImg/thea.png"
    },
    {
      name: "Thor",
      path: "legendImg/thor.png"
    },
    {
      name: "Ulgrim",
      path: "legendImg/ulgrim.png"
    },
    {
      name: "Val",
      path: "legendImg/val.png"
    },
    {
      name: "Vector",
      path: "legendImg/vector.png"
    },
    {
      name: "Wu Shang",
      path: "legendImg/wushang.png"
    },
    {
      name: "Xull",
      path: "legendImg/xull.png"
    },
    {
      name: "Yumiko",
      path: "legendImg/yumiko.png"
    },
    {
      name: "Zariel",
      path: "legendImg/zariel.png"
    }
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