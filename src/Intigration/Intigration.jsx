import React from 'react'
import Intigrationhero from './Intigrationhero'
import Intigrationpage2 from './Intigrationpage2'
import Intigrationpage3 from './Intigrationpage3';
import Intigrationpage4 from './Intigrationpage4';
import Intigrationpage5 from './Intigrationpage5';
import Intigrationpage6 from './Intigrationpage6';
import Intigrationpage7 from './Intigrationpage7';
import Section8 from '../Sections/Section8';
import Section9 from '../Sections/Section9';

const Intigration = () => {

  return (
    <div className="bg-white overflow-hidden relative text-lg">
      <Intigrationhero />
      <Intigrationpage2 />
      <Intigrationpage3/>
      <Intigrationpage4/>
      <Intigrationpage5/>
      <Intigrationpage6/>
      <Intigrationpage7/>
      <Section8/>
      <Section9/>
    </div>
  );
}

export default Intigration