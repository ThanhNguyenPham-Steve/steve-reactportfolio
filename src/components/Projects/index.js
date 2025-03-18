import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import wordle from '../../assets/images/wd.png'
import pong from '../../assets/images/p.png'
import geomaster from '../../assets/images/gm.png'

import AnimatedLetters from '../AnimatedLetters'
const Projects = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000);
        
        return () => clearTimeout(timer);
        }, []);
    return (
        <>
        <Loader type="pacman" active/>
        <div className = "container projects-page">
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters letterClass= {letterClass} strArray={['P','r','o','j','e','c','t','s']}
                    idx = {5}
                    />
                </h1>
            <div class="project-container" onclick="window.location='https://github.com/ThanhNguyenPham-Steve/pong';">
                <img src ={pong} alt="Project Logo"/>
                <h2>Pong </h2>
                <p>Web-based classic Pong game.</p>
                <p>Tools: JavaScript, HTML, Phaser.</p>
            </div>
            <div class="project-container" onclick="window.location='https://github.com/ThanhNguyenPham-Steve/GeoMaster';">
                <img src={geomaster} alt="Project Logo"/>
                <h2>GeoMaster</h2>
                <p>A geographic trivia quiz Android app.</p>
                <p>Tools: Java, Android Studio (Kotlin and Android's native UI components).</p>
            </div>
            <div class="project-container" onclick="window.location='https://github.com/ThanhNguyenPham-Steve/wordle';">
                <img src={wordle} alt="Project Logo"/>
                <h2>Wordle</h2>
                <p>Web-based word puzzle game, guess a 5-letter word within six attempts.</p>
                <p>Tools: JavaScript, HTML, Phaser.</p>
            </div>
          <div class="project-container" onclick="window.location='https://github.com/ThanhNguyenPham-Steve/UtilityBot';">
                <h2>Utility Bot</h2>
                <p>Utility Bot to maintain server.</p>
                <p>Tools: Python, Discord API.</p>
            </div>
        </div>
        </div>
        
    </>)
}

export default Projects