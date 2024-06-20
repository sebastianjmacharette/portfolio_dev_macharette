import React from "react";
import Heros from "../assets/logos/hero.webp";

function Hero() {
    return (
        <div id="hero" className="h-screen relative">
            <div
                className="bg-cover bg-center h-full w-full"
                style={{ backgroundImage: `url(${Heros})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <h1 className="text-4xl text-purple-500 font-bold mb-4 text-center md:text-5xl lg:text-6xl">
                        Sebastían J. Macharette
                    </h1>
                    <h2 className="text-2xl text-purple-400 font-bold mb-4 text-center md:text-3xl lg:text-4xl">
                        Full Stack Developer (Especializado en FrontEnd)
                    </h2>
                    <h2 className="text-2xl text-purple-500 font-bold mb-4 text-center md:text-3xl lg:text-4xl">
                        Diseñador UX/UI
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Hero;
