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
        className="bg-slate-100 min-h-screen flex flex-col justify-star pb-10 ">
         <div className="inline-flex lg:mt-10 sm:mt-4 items-center justify-center w-full">
    <hr className="w-full h-1   border-2  bg-purple-700"/>
    <span className="absolute px-3 font-medium text-purple-700 text-xl -translate-x-1/2 text-center bg-white left-1/2 ">Experiencia de clientes</span>
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