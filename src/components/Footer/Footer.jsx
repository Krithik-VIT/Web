import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <div className="columnTitle">
            Company
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">About</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Services</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Contact
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              Phone: +1 (123) 456-7890
            </div>
            <div className="columnTextItem">
              Email: <u><a href='#'>support.company@gmail.com</a></u>
            </div>
            <div className="columnTextItem">
              Address: 123 street,India
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
