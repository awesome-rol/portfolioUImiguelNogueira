import React from 'react';
import './DivisorPadrao.css'

const DivisorPadrao = ({margemTopo}) => {
  return (
    <div style={{marginTop: margemTopo}} className='divisorPadrao'></div>
  );
};

export default DivisorPadrao;