import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Study from './Study';
import Proyects from './Proyects';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Study/>
        <Proyects/>
        <Clients/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home