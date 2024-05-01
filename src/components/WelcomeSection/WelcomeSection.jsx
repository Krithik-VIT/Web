import { useEffect, useRef } from 'react'
import './WelcomeSection.css'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
          Changing the Future, for the Better.
        </div>
        <div className="mottoSubtitle">
        At Company, we are driven by a passion for innovation and a commitment to harnessing the power of artificial intelligence to transform businesses and drive meaningful change.
        </div>
        <div className="welcomeButtons">
        <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer">
          <button>Machine Learning</button>
        </a>
        <a href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" rel="noopener noreferrer">
          <button>Deep Learning</button>
        </a>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/images/welcomeImage.png' 
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
