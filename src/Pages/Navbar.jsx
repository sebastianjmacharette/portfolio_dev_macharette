import React, { useState, useEffect, useRef } from "react";  
import '../assets/Navbarcss.css'
import Logo from '../assets/logos/logowhite.png'
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleLinkClick = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const navbarHeight = navbarRef.current.clientHeight;
                const offsetTop = targetElement.offsetTop - navbarHeight;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        };
        const links = document.querySelectorAll('nav a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <div>
            <nav ref={navbarRef}  className={`navbar bg-purple-600 ${isScrolled ? 'bg-opacity-70' : ''} ${isScrolled ? 'shadow-md' : ''} ${isScrolled ? 'fixed top-0' : ''} w-full`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={Logo}
                            className="w-20"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
                            Porfolio Digital
                        </span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
                             text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={menuOpen ? "true" : "false"}>
                        <span className="sr-only">
                            {menuOpen ? "Close main menu" : "Open main menu"}
                        </span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={menuOpen ? "M5 3l6 6m0 0l-6 6m6-6H0" : "M1 1h15M1 7h15M1 13h15"}
                            />
                        </svg>
                    </button>
                    <div className={menuOpen ? "block w-full md:hidden" : "hidden w-full md:hidden"} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg">
                            <li>
                                <a
                                    href="#hero"
                                    className="block py-2 px-3 text-white rounded"
                                    aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block py-2 px-3 text-white rounded">
                                    Sobre mi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#study"
                                    className="block py-2 px-3 text-white rounded">
                                    Estudios
                                </a>
                            </li>
                          
                            <li>
                                <a
                                    href="#proyects"
                                    className="block py-2 px-3 text-white rounded">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#clients"
                                    className="block py-2 px-3 text-white rounded">
                                    Clientes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block py-2 px-3 text-white rounded">
                                    Contacto
                                </a>
                            </li> 
                        </ul>
                    </div>
                    <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#hero"
                                    className="block py-2 px-3 text-white rounded md:p-0 dark:text-white"
                                    aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block py-2 px-3 text-white rounded md:p-0 dark:text-white">
                                    Sobre mi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#study"
                                    className="block py-2 px-3 text-white rounded md:p-0 dark:text-white">
                                    Estudios
                                </a>
                            </li>
                         
                            <li>
                                <a
                                    href="#proyects"
                                    className="block py-2 px-3 text-white rounded md:p-0 dark:text-white">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#clients"
                                    className="block py-2 px-3 text-white rounded md:p-0 dark:text-white">
                                    Clientes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block py-2 px-3 text-white rounded md:p-0 dark:text-white">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
