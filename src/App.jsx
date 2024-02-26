import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Course from './Components/Course'
import Footer from './Shared/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
 

  return (
    <>
 {/*Importing components here */}
 <div>
  <Router>
  <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/course" element={<Course />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    </Routes>
  </Router>
 </div>
 
 <Footer/>
    </>
  )
}

export default App
