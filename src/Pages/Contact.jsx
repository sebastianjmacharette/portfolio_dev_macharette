import React from 'react';
import ContactForm from './ContactForm';
import ContactDate from './ContacDate';

function Contact() {
  return (
    <div id='contact' className='h-full mx-auto p-1 bg-gray-200'>
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="text-white lg:px-4 lg:py-2 w-full lg:w-1/3   mt-10">
            <ContactForm />
          </div>
          <div className="text-white lg:px-4 lg:py-2 w-full lg:w-2/3 mt-4 lg:mt-0">
            <ContactDate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
