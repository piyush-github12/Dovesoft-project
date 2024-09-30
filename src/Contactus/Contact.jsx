import React from 'react'
import Contacthome from './Contacthome';
import Contactpage2 from './Contactpage2';
import Section8 from '../Sections/Section8';
import Section9 from '../Sections/Section9';

const Contact = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
        <Contacthome/>
        <Contactpage2/>
        <Section8/>
        <Section9/>
    </div>
  );
}

export default Contact