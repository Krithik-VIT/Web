import { useEffect, useRef } from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const aboutImageRef = useRef()



  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='/images/aboutUsImage.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
          About Us
        </div>
        <div className="body">
        Our mission is to empower organizations of all sizes to unlock the full potential of AI, enabling them to thrive in a rapidly evolving digital landscape. We believe that by democratizing access to advanced AI technologies and expertise, we can foster a future where every business, regardless of industry or scale, can leverage AI to achieve their goals and surpass their expectations.
        </div>
        <div className="button">
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
