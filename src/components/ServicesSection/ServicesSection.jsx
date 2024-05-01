import { useEffect, useRef } from "react"
import './ServicesSection.css'

const ServicesSection = () => {
  const serviceImageRef = useRef()



  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
          Services
        </div>
        <div className="serviceTable">
          <table>
            <tr>
              <th>Service</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>AI Consultation</td>
              <td>Tailored advisory services to help businesses strategize, implement, and optimize AI solutions according to their specific needs and goals.</td>
            </tr>
            <tr>
              <td>AI Development</td>
              <td>Custom AI software development, including machine learning algorithms, natural language processing systems, computer vision applications, and more, designed to enhance efficiency and innovation.</td>
            </tr>
            <tr>
              <td>AI Integration</td>
              <td>Seamless integration of AI technologies into existing workflows and systems, ensuring smooth transition and maximal utilization of AI capabilities within the organization.</td>
            </tr>
            <tr>
              <td>AI Training and Support</td>
              <td>Comprehensive training programs and ongoing support to empower teams with the knowledge and skills required to effectively leverage AI tools and platforms for sustained success.</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/images/servicesImage.png' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
      <div className="contactForm">
          <h2>Contact Form</h2>

          <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="service">Type of Service:</label>
            <select id="service" name="service" required>
              <option value="">Select...</option>
              <option value="AI Consultation">AI Consultation</option>
              <option value="AI Development">AI Development</option>
              <option value="AI Integration">AI Integration</option>
              <option value="AI Training and Support">AI Training and Support</option>
            </select>
            <label>Located:</label><br></br>
              <input type="radio" id="India" name="located" value="India"/>
              <label for="India">India</label>
              <input type="radio" id="Outside" name="located" value="Outside"/>
              <label for="type2">Outside</label>
              <br></br><br></br>
              <label>CompanySize: </label><br></br>
              <input type="checkbox" id="companySize1" name="companySize" value="Small"/>
              <label for="companySize1">Small</label>
              <input type="checkbox" id="companySize2" name="companySize" value="Medium"/>
              <label for="companySize2">Medium</label>
              <input type="checkbox" id="companySize3" name="companySize" value="Large"/>
              <label for="companySize3">Large</label><br></br><br></br>

            <label for="contact">Contact:</label>
            <input type="text" id="contact" name="contact" required/>

            <input type="submit" value="Submit"/>
            <input type="reset" value="Reset Fields"/>
          </form>
      </div>
    </section>
  )
}

export default ServicesSection
