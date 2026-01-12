import './App.css'
import {Routes , Route} from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import WhatsappIcon from './Components/WhatsappIcon.jsx';

import Home from './pages/Home.jsx';
import About from  './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx';
import CallButton from './Components/CallButton.jsx';


function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/courses" element = {<Courses />} />
        <Route path = "/Contact" element = {<Contact />} />
      </Routes>

      <CallButton />
      <WhatsappIcon />
    </div>
  )
}

export default App
