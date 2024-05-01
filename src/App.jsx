import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import Footer from "./components/Footer/Footer"
import './index.css'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <Footer/>
    </div>
  )
}

export default App
