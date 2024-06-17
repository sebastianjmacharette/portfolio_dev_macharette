import React, { useState } from 'react'; 
import Logo from '../assets/logos/logowhite.png';

function Footer() {
  const [anioActual, setAnioActual] = useState(new Date().getFullYear()); 

  return (
    <div className='m-0 bg-purple-600'>
      <footer className="bg-purple-600rounded-lg shadow text-white">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-20" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Porfolio Digital</span>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto 0 lg:my-8" />
          <span className="block text-sm text-white sm:text-center d">
            © {anioActual} <span    >Sebastian Macharette</span>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
