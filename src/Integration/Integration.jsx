import React from 'react'
import Integrationhero from './Integrationhero'
import Integrationpage2 from './Integrationpage2'
import Integrationpage3 from './Integrationpage3';
import Integrationpage4 from './Integrationpage4';
import Integrationpage5 from './Integrationpage5';
import Integrationpage6 from './Integrationpage6';
import Integrationpage7 from './Integrationpage7';
import Section8 from '../Sections/Section8';
import Section9 from '../Sections/Section9';

const Integration = () => {

  return (
    <div className="bg-white overflow-hidden relative text-base">
      <Integrationhero />
      <Integrationpage2 />
      <Integrationpage3/>
      <Integrationpage4/>
      <Integrationpage5/>
      <Integrationpage6/>
      <Integrationpage7/>
      <Section8/>
      <Section9/>
    </div>
  );
}

export default Integration