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
    className='h-full mx-auto   p-4 bg-gray-200'
>
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
