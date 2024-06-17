import React from 'react';
import Molachino from '../jobs/Molachino';
import Lem from '../jobs/Lem';
import MedicOne from '../jobs/MedicOne';
import ControlParental from '../jobs/ControlParental';
import AtuServicio from '../jobs/AtuServicio';
import Wordpress from '../jobs/Wordpress';
import Meteo from '../jobs/Meteo';
import Wix from '../jobs/wix';
import Desing from '../jobs/Desing';
function Proyects() {
  return (
    <div
    id='proyects'
    className='h-full    p-4 bg-slate-100'
>
<div className="inline-flex lg:mb-6 sm:mt-4 items-center justify-center w-full">
    <hr className="w-full h-1   border-2  bg-purple-700"/>
    <span className="absolute px-3 font-medium text-purple-700 text-xl -translate-x-1/2 bg-white left-1/2 ">Proyectos</span>
</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:ml-8  '>
    
        <Molachino/>
        <Lem/>
        <MedicOne/>
        <ControlParental/>
        <AtuServicio/>
        <Wordpress/>
        <Meteo/>
        <Wix/>
        <Desing/>
       
    </div>
</div>

  )
}

export default Proyects
