import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Journey from '../Components/Journey';
import Qualification from '../Components/Qualification';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
// import Projects from '../Components/Projects';
// import FormValidation from '../Components/FormValidation';
import Contact from '../Components/Contact';


const Home = () => {
  return (
    <div id="home">
      <Banner />
      <AboutMe />
      <Journey />
      <Experience />
      <Qualification />
      <Skills />
      <Contact />
      {/* <FormValidation /> */}      
    </div>
  )
}

export default Home