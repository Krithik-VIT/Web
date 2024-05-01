import './NavigationBar.css'
import { useState, useEffect } from 'react'

import { RxHamburgerMenu as OpenMenu } from "react-icons/rx"
import { CgClose as HideMenu} from 'react-icons/cg' 

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      window.innerWidth > 1200 && setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav className="navBar">
        <div className="leftSection">
            <div className='companyLogo'>
              <img src='/images/globeIcon.png'/>
              <h1>Company</h1>
            </div>
          
            <div className="navBtns">
              <div className="navDropdown">
                <button>About Us</button>
                <div className="aboutDropdownMenu">
                  <div className="menuItem">
                    <h3>Who We Are</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                        Get to know more about our business and what we do to serve our fellow communities.
                        
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Our Mission</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                        Our mission at Company is to make a positive impact in the world through our work.
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>Meet the Team</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                        See all the amazing members of our team who help make our goals become reality.
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navDropdown">
                <button>Services</button>
                <div className="serviceDropdownMenu">
                  <div className="menuItem">
                    <h3>AI Consultation:</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Tailored advisory services to help businesses strategize, implement, and optimize AI solutions according to their specific needs and goals.
                        
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>AI Development:</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Custom AI software development, including machine learning algorithms, natural language processing systems, computer vision applications, and more, designed to enhance efficiency and innovation.
                        
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>AI Integration:</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Seamless integration of AI technologies into existing workflows and systems, ensuring smooth transition and maximal utilization of AI capabilities within the organization.
                        
                      </p>
                    </div>
                  </div>
                  <div className="menuItem">
                    <h3>AI Training and Support:</h3>
                    <hr/>
                    <div className="dropdownDescription">
                      <p>
                      Comprehensive training programs and ongoing support to empower teams with the knowledge and skills required to effectively leverage AI tools and platforms for sustained success.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
        <div className="sideMenu" style={{display: (!menuOpen || width > 1200) ? 'none' : 'flex'}}>
          <div className="sideMenuSiteSections">
            <button>About Us</button>
            <button>Services</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
