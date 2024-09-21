import React from 'react'
import Linkshortnerhero from './Linkshortnerhero'
import Linkshortnerpage2 from './Linkshortnerpage2'
import Linkshortnerpage3 from './Linkshortnerpage3'
import Linksshotnerpage4 from './Linksshotnerpage4'
import Section8 from '../Sections/Section8'
import Section9 from '../Sections/Section9'

const Linkshortner = () => {
  return (
     <div  className="bg-white relative overflow-hidden ">
        <Linkshortnerhero/> 
        <Linkshortnerpage2/>
        <Linkshortnerpage3/>
        <Linksshotnerpage4/>
        <Section8/>
        <Section9/>
     </div>
  )

}

export default Linkshortner