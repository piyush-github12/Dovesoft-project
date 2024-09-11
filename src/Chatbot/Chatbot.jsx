import React from 'react'
import Chatbotheropage from './Chatbotheropage'
import Chatbotpage2 from './Chatbotpage2'
import Chatbotpage3 from './Chatbotpage3'
import Chatbotpage4 from './Chatbotpage4'
import Section9 from '../Sections/Section9'
import Section8 from '../Sections/Section8'

const Chatbot = () => {
  return (<div className="bg-white overflow-hidden relative text-lg">
      <Chatbotheropage/>
      <Chatbotpage2/>
      <Chatbotpage3/>
      <Chatbotpage4/>
      <Section8/>
      <Section9/>
  </div>)
}

export default Chatbot