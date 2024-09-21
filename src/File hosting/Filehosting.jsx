import React from 'react'
import Filehostinghero from './Filehostinghero'
import Filehostingpage2 from './Filehostingpage2'
import Filehostingpage4 from './Filehostingpage4'
import Filehostingpage3 from './Filehostingpage3'
import Filehostingpage5 from './Filehostingpage5'

const Filehosting = () => {
  return (
    <div  className="bg-white relative overflow-hidden ">
        <Filehostinghero/>
        <Filehostingpage2/>
        <Filehostingpage3/>
        <Filehostingpage4/>
        <Filehostingpage5/>
    </div>
  )

}

export default Filehosting