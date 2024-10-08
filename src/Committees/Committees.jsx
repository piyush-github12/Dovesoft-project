import React from 'react'
import Committeeshero from './Committeeshero'
import Committeespage2 from './Committeespage2'
import GoodIsolation from '../components/GoodIsolation.jsx'
import Section9 from '../Sections/Section9'

const Committees = () => {
  return (
    <div className="bg-white overflow-hidden relative text-base">
      <Committeeshero />
      <Committeespage2 />
      <GoodIsolation />
      <Section9 />
    </div>
  );
}

export default Committees