import React from 'react'
import Voicehome from './Voicehome'
import Voicepage2 from './Voicepage2'
import Voicepage3 from './Voicepage3'
import Voicepage4 from './Voicepage4'
import Voicepage5 from './Voicepage5'
import Section8 from '../Sections/Section8'
import Section9 from '../Sections/Section9'

const Voice = () => {
  return (
    <div className="bg-[#fff] overflow-hidden relative">
        <Voicehome/>
        <Voicepage2/>
        <Voicepage3/>
        <Voicepage4/>
        <Voicepage5/>
        <Section8/>
        <Section9/>
        
    </div>
  )
}

export default Voice