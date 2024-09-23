import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';
import RCSheropage from './RCSheropage';
import RCSpage2 from './RCSpage2';
import RCSpage3 from './RCSpage3';
import RCSpage4 from './RCSpage4';
import RCSpage5 from './RCSpage5';
import Section8 from '../Sections/Section8';
import Section9 from '../Sections/Section9';
import RCSpage6 from './RCSpage6';

const RCS = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
      <RCSheropage/>
      <RCSpage2/>
      <RCSpage3/>
      <RCSpage4/>
      <RCSpage5/>
      <RCSpage6/>
      <Section8/>
      <Section9/>
    </div>
  );
}

export default RCS