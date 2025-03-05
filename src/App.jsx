import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import NoMatch from './Pages/NoMatch';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import NavigationLeft from './Components/NavigationLeft';
import MoreExperience from './Components/MoreExperience';
import { expInfoContext } from './Components/Context/AppContext';
// import ScrollToTop from "react-scroll-to-top";
import { FaAngleDoubleUp } from "react-icons/fa";

function App() {
  const [moreBtn, setMoreBtn] = useState(0)
  return (
    <>
      <expInfoContext.Provider value={ {moreBtn, setMoreBtn} }>
        <NavigationBar />
        <NavigationLeft />
        <Routes>
          <Route exact path="/Resume2025" element={<Home />}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/moreExperience" element={<MoreExperience />}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>
        {/* <Home />
          <AboutMe />
          <Projects />
          <Contact />
          <MoreExperience />
          <NoMatch /> */}
        <Footer />
        {/* <ScrollToTop smooth viewBox="0 0 24 24" component={<FaAngleDoubleUp />}/> */}
      </expInfoContext.Provider>
    </>
  )
}

export default App