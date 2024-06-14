import React from "react";
import Egg from "../studies/Egg";
import CodoACodo from "../studies/CodoACodo";
import Google from "../studies/Google";
import Telefonica from "../studies/Telefonica";
import Donweb from "../studies/Donweb";
import TodoCode from "../studies/TodoCode";
import CodigoFacilito from "../studies/CodigoFacilito";
import Skills from '../studies/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import DownloadCV from "../studies/handleDownload";
import { SimpleGrid, Box } from '@chakra-ui/react'
function Study() {
    return (
        <div
        id="study"
        className="bg-slate-800 min-h-screen flex flex-col justify-star  ">

            <h2 className="text-white mb-8  text-3xl font-semibold p-4">Estudios y Capacitaciones</h2>
      
            <div className="flex flex-col justify-star lg:px-20 sm:px-2  ">
               <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
      <Egg />
    </div>
    <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <CodoACodo />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <Google />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <Telefonica />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <Donweb />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <TodoCode />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <CodigoFacilito />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <Skills />
                </div>
                <div className="mb-8 text-white text-xl border-b px-4 flex items-center">
               <FontAwesomeIcon icon={faAnglesRight} className="mr-2 mt-1" />
                    <DownloadCV />
                </div>
            </div>
        </div>
    );
}

export default Study;
