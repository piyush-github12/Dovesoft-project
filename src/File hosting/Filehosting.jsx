import React from 'react'
import Filehostinghero from './Filehostinghero'
import Filehostingpage2 from './Filehostingpage2'
import Filehostingpage4 from './Filehostingpage4'
import Filehostingpage3 from './Filehostingpage3'
import Section9 from '../Sections/Section9'
import Section8 from '../Sections/Section8'

const Filehosting = () => {
  return (
    <div  className="bg-white relative overflow-hidden ">
        <Filehostinghero/>
        <Filehostingpage2/>
        <Filehostingpage3/>
        <Filehostingpage4/>
        <Section8/>
        <Section9/>
    </div>
  )

}

export default Filehosting