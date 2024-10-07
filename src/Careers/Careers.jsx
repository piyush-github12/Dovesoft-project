import React from 'react'
import Careershero from './Careershero'
import Careerspage2 from './Careerspage2'
import Careerspage3 from './Careerspage3'
import Section8 from '../Sections/Section8'
import Section9 from '../Sections/Section9'

const Careers = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
        <Careershero/>
        <Careerspage2/>
        <Careerspage3/>
        <Section8/>
        <Section9/>
    </div>
  )
}

export default Careers