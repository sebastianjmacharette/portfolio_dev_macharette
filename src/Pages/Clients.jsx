import React from 'react'
import Molachino from '../clients/Molachino'
import Contigiani from '../clients/Contigiani';
import Giachetta from '../clients/Giachetta';
import Lem from '../clients/Lem'
import Ranqueles from '../clients/Ranqueles';
import Roich from '../clients/Roich'; 

function Clients() {
  return (
    <div
        id="clients"
        className="bg-slate-800 min-h-screen flex flex-col justify-star pb-10 ">
          <div
          className='p-4'
          >
            <h2
            className='text-white font-semibold text-2xl'
            >Experiencia de Clientes </h2>
          </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:ml-6  '>
    {/* lista de clientes */}
        <Molachino/>
        <Contigiani/>
        <Giachetta/>
        <Lem/>
        <Ranqueles/>
        <Roich/>



      </div>
    </div>
    
        
  )
}

export default Clients