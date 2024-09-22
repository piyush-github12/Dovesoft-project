import React from 'react'
import Otphome from './Otphome'
import Otppage2 from './Otppage2'
import Otppage3 from './Otppage3'
import Otppage4 from './Otppage4'
import Section9 from '../Sections/Section9'
import Section8 from '../Sections/Section8'

const Otp = () => {
  return (
    <div className="bg-white relative overflow-hidden ">
        <Otphome/>
        <Otppage2/>
        <Otppage3/>
        <Otppage4/>
        <Section8/>
        <Section9/>
    </div>
  )
}

export default Otp