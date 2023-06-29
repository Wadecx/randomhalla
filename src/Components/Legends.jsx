import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/Legends.css'
import Gif from '../../public/loading/Loading.gif';
import { BsFillDice6Fill } from "react-icons/bs";


const legends = (props) => {

    const [imgLegend, setImgLegend] = useState();

    useEffect(() => {
        
    }, [props.character])

    return (
        <>
            {props.character || props.weapon ? <div className="display">
                {props.character ? <div className='character'>

                    <h1>{props.character.name}</h1>
                    <img src={props.character.path}></img>

                </div> : props.weapon ? <div className='weapon'>

                    <h1>{props.weapon}</h1>
                    <img src={props.weaponPath}></img>

                </div>

                    :

                    <div className='loading'>
                        <div className="text">
                            <h1>WAITING FOR YOU TO ROLL THE DICE </h1>
                            <BsFillDice6Fill className='logo' />
                        </div>
                        <img src={Gif} className="loadingImg" />
                    </div>}
            </div>
                :
                <div className='loading'>
                    <div className="text">
                        <h1>WAITING FOR YOU TO ROLL THE DICE </h1>
                        <BsFillDice6Fill className='logo' />
                    </div>
                    <img src={Gif} className="loadingImg" />
                </div>}
        </>
    )
}

export default legends