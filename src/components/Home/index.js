import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I','\'','m',' ','S', 't', 'e', 'v', 'e']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);
    
    return () => clearTimeout(timer);
    }, []);
    return (
        <>
        <Loader type = "pacman" active />
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
                </h1>
                <br />
                <br />
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    </>);
}

export default Home