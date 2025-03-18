import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
      <span className="animated-text">
        {strArray.map((char, i) => (
          <span 
            key={char + i} 
            className={`${letterClass} _${i + idx}`}
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }} // Handle spaces properly
          >
            {char}
          </span>
        ))}
      </span>
    )
  }
export default AnimatedLetters