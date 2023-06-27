import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/Legends.css'
import Gif from '../../public/loading/loading.gif';
import { BsFillDice6Fill } from "react-icons/bs";


const legends = (props) => {

    const [imgLegend, setImgLegend] = useState();

    useEffect(() => {

        switch (props.character) {
            case 'Ada':
                setImgLegend('legendImg/ada.png');
                break;
            case 'Arcadia':
                setImgLegend('legendImg/arcadia.png');
                break;
            case 'Artemis':
                setImgLegend('legendImg/artemis.png');
                break;
            case 'Asuri':
                setImgLegend('legendImg/asuri.png');
                break;
            case 'Azoth':
                setImgLegend('legendImg/azoth.png');
                break;
            case 'Barraza':
                setImgLegend('legendImg/barraza.png');
                break;
            case 'Bodvar':
                setImgLegend('legendImg/bodvar.png');
                break;
            case 'Brynn':
                setImgLegend('legendImg/brynn.png');
                break;
            case 'Caspian':
                setImgLegend('legendImg/caspian.png');
                break;
            case 'Cassidy':
                setImgLegend('legendImg/cassidy.png');
                break;
            case 'Cross':
                setImgLegend('legendImg/cross.png');
                break;
            case 'Diana':
                setImgLegend('legendImg/diana.png');
                break;
            case 'Dusk':
                setImgLegend('legendImg/dusk.png');
                break;
            case 'Ember':
                setImgLegend('legendImg/ember.png');
                break;
            case 'Ezio':
                setImgLegend('legendImg/ezio.png');
                break;
            case 'Fait':
                setImgLegend('legendImg/fait.png');
                break;
            case 'Gnash':
                setImgLegend('legendImg/gnash.png');
                break;
            case 'Hattori':
                setImgLegend('legendImg/hattori.png');
                break;
            case 'Isaiah':
                setImgLegend('legendImg/isaiah.png');
                break;
            case 'Jaeyun':
                setImgLegend('legendImg/jaeyun.png');
                break;
            case 'Jhala':
                setImgLegend('legendImg/jhala.png');
                break;
            case 'Jiro':
                setImgLegend('legendImg/jiro.png');
                break;
            case 'Kaya':
                setImgLegend('legendImg/kaya.png');
                break;
            case 'Koji':
                setImgLegend('legendImg/koji.png');
                break;
            case 'Kor':
                setImgLegend('legendImg/kor.png');
                break;
            case 'Lin Fei':
                setImgLegend('legendImg/linfei.png');
                break;
            case 'Lord Vraxx':
                setImgLegend('legendImg/lordvraxx.png');
                break;
            case 'Lucien':
                setImgLegend('legendImg/lucien.png');
                break;
            case 'Magyar':
                setImgLegend('legendImg/magyar.png');
                break;
            case 'Mako':
                setImgLegend('legendImg/mako.png');
                break;
            case 'Mirage':
                setImgLegend('legendImg/mirage.png');
                break;
            case 'Mordex':
                setImgLegend('legendImg/mordex.png');
                break;
            case 'Munin':
                setImgLegend('legendImg/munin.png');
                break;
            case 'Nix':
                setImgLegend('legendImg/nix.png');
                break;
            case 'Onyx':
                setImgLegend('legendImg/onyx.png');
                break;
            case 'Orion':
                setImgLegend('legendImg/orion.png');
                break;
            case 'Petra':
                setImgLegend('legendImg/petra.png');
                break;
            case 'Queen Nai':
                setImgLegend('legendImg/queennai.png');
                break;
            case 'Ragnir':
                setImgLegend('legendImg/ragnir.png');
                break;
            case 'Rayman':
                setImgLegend('legendImg/rayman.png');
                break;
            case 'Red Raptor':
                setImgLegend('legendImg/redraptor.png');
                break;
            case 'Reno':
                setImgLegend('legendImg/reno.png');
                break;
            case 'Scarlet':
                setImgLegend('legendImg/scarlet.png');
                break;
            case 'Sentinel':
                setImgLegend('legendImg/sentinel.png');
                break;
            case 'Sidra':
                setImgLegend('legendImg/sidra.png');
                break;
            case 'Sir Roland':
                setImgLegend('legendImg/sirroland.png');
                break;
            case 'Teros':
                setImgLegend('legendImg/teros.png');
                break;
            case 'Tezca':
                setImgLegend('legendImg/tezca.png');
                break;
            case 'Thatch':
                setImgLegend('legendImg/thatch.png');
                break;
            case 'Thea':
                setImgLegend('legendImg/thea.png');
                break;
            case 'Thor':
                setImgLegend('legendImg/thor.png');
                break;
            case 'Ulgrim':
                setImgLegend('legendImg/ulgrim.png');
                break;
            case 'Val':
                setImgLegend('legendImg/val.png');
                break;
            case 'Vector':
                setImgLegend('legendImg/vector.png');
                break;
            case 'Volkov':
                setImgLegend('legendImg/volkov.png');
                break;
            case 'Wu Shang':
                setImgLegend('legendImg/wushang.png');
                break;
            case 'Xull':
                setImgLegend('legendImg/xull.png');
                break;
            case 'Yumiko':
                setImgLegend('legendImg/yumiko.png');
                break;
            case 'Zariel':
                setImgLegend('legendImg/zariel.png');
                break;

        }
    }, [props.character])

    return (
        <>
            {props.character ? <div className="display">
                <h1>{props.character}</h1>
                <img src={imgLegend}></img>
            </div>
                :
                <div className='loading'>
                    <div className="text">
                        <h1>WAITING FOR YOU TO ROLL THE DICE </h1>
                        <BsFillDice6Fill className='logo'/>
                    </div>
                    <img src={Gif} className="loadingImg" />
                </div>}
        </>
    )
}

export default legends