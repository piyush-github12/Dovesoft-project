import React from 'react'
import Filegpthome from './Filegpthome'
import Filegptpage2 from './Filegptpage2'
import Filegptpage3 from './Filegptpage3'
import Filegptpage4 from './Filegptpage4'
import Section9 from '../Sections/Section9'
import Section8 from '../Sections/Section8'

const Filegpt = () => {
  return (
    <div className="bg-white relative overflow-hidden ">
        <Filegpthome/>
        <Filegptpage2/>
        <Filegptpage3/>
        <Filegptpage4/>
        <Section8/>
        <Section9/>
    </div>
  )
}

export default Filegpt