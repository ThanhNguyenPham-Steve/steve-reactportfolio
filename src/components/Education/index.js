import { useEffect, useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/sc.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
const Education = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
        <Loader type="pacman" active />
        <div className="container education-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                        idx={5}
                    />
                </h1>
                <h2>The University of Adelaide</h2>
                <img src={LogoS} alt="Logo" />
                <h2>Mar 2024 - Nov 2026</h2>
                <ul class="responsive-list">
                    <li><h2>Bachelor of Computer Science.</h2></li>
                    <li><h2>Concentrations: Modelling/Simulations.</h2></li>
                    <li><h2>GPA: 6.25/7.0.</h2></li>
                </ul>
            </div>

        </div>
    </>
    );
}

export default Education