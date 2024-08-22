import React from 'react'
import "./App.css";
import Section1 from './Sections/Section1';
import Navbar from './components/Navbar';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Footer from './Sections/Footer';
import Section7 from './Sections/Section7';
import Section8 from './Sections/Section8';
import Section9 from './Sections/Section9';

const App = () => {
  return (
    <div className='overflow-hidden bg-[#fff]'>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Footer/>
     
    </div>
  );
}

export default App