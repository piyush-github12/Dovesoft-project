import React from 'react'
import Certificatehero from './Certificatehero'
import Certificatepage2 from './Certificatepage2'
import GoodIsolation from '../components/GoodIsolation'
import Section9 from '../Sections/Section9'

const Certificate = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
        <Certificatehero/>
        <Certificatepage2/>
        <GoodIsolation/>
        <Section9/>
    </div>
  )
}

export default Certificate