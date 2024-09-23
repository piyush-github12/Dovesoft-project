import React from 'react'
import Automationhero from './Automationhero'
import Automationpage2 from './Automationpage2'
import Automationpage3 from './Automationpage3'
import Automationpage4 from './Automationpage4'
import Automationpage5 from './Automationpage5'
import Automationpage6 from './Automationpage6'
import Section8 from '../Sections/Section8'
import Section9 from '../Sections/Section9'

const Automation = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
      <Automationhero />
      <Automationpage2 />
      <Automationpage3 />
      <Automationpage4/>
      <Automationpage5/>
      <Automationpage6/>
      <Section8/>
      <Section9/>
    </div>
  );
}

export default Automation