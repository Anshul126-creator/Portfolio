import React from 'react';
import Hero from './sections/Hero.jsx';
import NavBar from './components/NavBar.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import LogoSection from './sections/LogoSection.jsx';
import FeaturedCards from './sections/FeaturedCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import TechStack from './sections/TechStack.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
const App = () => {
  return (
    <>
    <Hero/>
    <ShowcaseSection/>
    <NavBar/>
    <LogoSection/>
    <FeaturedCards/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default App;