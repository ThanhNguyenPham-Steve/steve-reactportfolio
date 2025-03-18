import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const Experience = ()=> {
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
        <div className = "container experience-page">
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters letterClass = {letterClass} strArray={['E','x','p','e','r','i','e','n','c','e']}
                    idx = {5}
                    />
                </h1>
            </div>

        </div>
    </>)
}

export default Experience