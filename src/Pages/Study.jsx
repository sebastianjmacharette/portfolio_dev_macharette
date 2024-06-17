import React from "react";
import Egg from "../studies/Egg";
import CodoACodo from "../studies/CodoACodo";
import Google from "../studies/Google";
import Telefonica from "../studies/Telefonica";
import Donweb from "../studies/Donweb";
import TodoCode from "../studies/TodoCode";
import CodigoFacilito from "../studies/CodigoFacilito";
import Skills from '../studies/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import DownloadCV from "../studies/handleDownload";
import EggImage from '../assets/estudiosLogs/egg.png';
import CodoImage from '../assets/estudiosLogs/codoacodo.png';
import GoogleImage from '../assets/estudiosLogs/5ffe9f1fda62b9001cd08d24.png';
import TelefonicaImage from '../assets/estudiosLogs/telefonica.png';
import DonWebImage from '../assets/estudiosLogs/Diseño sin título.png';
import TodoCodeImage from '../assets/estudiosLogs/todocode.png';
import CodigoFacilitoImage from '../assets/estudiosLogs/codigofacilito.png';
import SkillsImage from '../assets/estudiosLogs/skills.png';
import CvImage from '../assets/estudiosLogs/cv.png';

function Study() {
    return (
        <div id="study" className="bg-slate-100 min-h-screen flex flex-col justify-start">
 <div className="inline-flex lg:mt-4 mb-4 sm:mt-4 items-center justify-center w-full">
    <hr className="w-full h-1   border-2  bg-purple-700"/>
    <span className="absolute px-3 font-medium text-purple-700 text-xl -translate-x-1/2 bg-white text-center left-1/2 ">Estudios y Capacitaciones</span>
</div>            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-20">
                <div className="flex flex-col items-center text-gray-800 text-xl   p-4">
                    <img src={EggImage} alt="" />
                     <Egg />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl   p-4">
                    <img src={CodoImage} alt="" />
                     <CodoACodo />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={GoogleImage} alt="" />
                     <Google />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={TelefonicaImage} alt="" />
                     <Telefonica />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={DonWebImage} alt="" />
                     <Donweb />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={TodoCodeImage} alt="" />
                     <TodoCode />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={CodigoFacilitoImage} alt="" />
                     <CodigoFacilito />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={SkillsImage} alt="" />
                     <Skills />
                </div>
                <div className="flex flex-col items-center text-gray-800 text-xl  p-4">
                    <img src={CvImage} alt="" />
                     <DownloadCV />
                </div>
            </div>
        </div>
    );
}

export default Study;
