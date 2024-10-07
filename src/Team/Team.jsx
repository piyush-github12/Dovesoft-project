import React from 'react'
import Teamhero from './Teamhero'
import Teampage2 from './Teampage2'
import Section9 from '../Sections/Section9'
import Section8 from '../Sections/Section8'

const Team = () => {
  return (
    <div className="bg-white relative overflow-hidden ">
        <Teamhero/>
        <Teampage2/>
        <Section8/>
        <Section9/>
    </div>
  )
}

export default Team