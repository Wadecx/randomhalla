import React from 'react'
import '../assets/Footer.css'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="leftSide">
                <h3>Made With love By Wadec ❤️</h3>
            </div>
            <div className="rightSide">
                <a href='https://github.com/Wadecx' target="blank">
                    <FaGithub className='logoGit' />
                </a>
            </div>
        </footer>
    )
}

export default Footer