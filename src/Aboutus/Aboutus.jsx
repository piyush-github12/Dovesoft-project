import React from 'react'
import Aboutushome from './Aboutushome'
import Aboutuspage2 from './Aboutuspage2'
import Section8 from '../Sections/Section8'
import Section9 from '../Sections/Section9'
import Aboutuspage3 from './Aboutuspage3'
import Aboutuspage5 from './Aboutuspage5'

const Aboutus = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
        <Aboutushome/>
        <Aboutuspage2/>
        <Aboutuspage3/>
        <Aboutuspage5/>
        <Section8/>
        <Section9/>
    </div>
  )
}

export default Aboutus