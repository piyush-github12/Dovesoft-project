import React from 'react'
import Emailpage2 from './Emailpage2'
import Emailhero from './Emailhero'
import Emailpage3 from './Emailpage3'
import Section8 from '../Sections/Section8'
import Section9 from '../Sections/Section9'

const Email = () => {
  return( <div className="bg-white overflow-hidden relative text-lg">
        <Emailhero/>
        <Emailpage2/>
        <Emailpage3/>
        <Section8/>
        <Section9/>
  </div>)
}

export default Email