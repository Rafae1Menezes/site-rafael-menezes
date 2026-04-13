"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import icon from "./icon.svg";
import globo from "./globo.svg";

const navItems = [
    {
        label: "Início",
        anchor: "#start",
    },
    {
        label: "Meu trabalho",
        anchor: "#my-work",
    },
    {
        label: "Artigos",
        anchor: "#articles",
    },
    {
        label: "Carreira",
        anchor: "#carrer",
    },
    {
        label: "Formação",
        anchor: "#education",
    },
    {
        label: "Stack",
        anchor: "#stack",
    },
    {
        label: "Contato",
        anchor: "#contact",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Trava o scroll quando o menu está aberto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 w-full
        bg-white/10 backdrop-blur-sm
        border-b border-white/30
        shadow-[0_8px_18px_rgba(0,0,0,0.02)]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <a href="#" className="text-black">
                            <span className="font-semibold text-xl">RAFAEL MENEZES</span>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.anchor}
                                    className="relative text-sm text-gray-500 hover:text-gray-900 transition-colors py-0.5 highlight-link"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-900 transition-colors border border-b-blue-950 py-1 px-3 rounded-full flex flex-row gap-1 items-center"
                            >
                                <Image src={globo} width={15} height={15} alt="idioma" />
                                Português
                            </a>
                        </div>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-[60]"
                            aria-label="Abrir menu"
                        >
                            <span
                                className={`block w-[22px] h-[2px] bg-black rounded transition-all duration-300 origin-center
                ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
                            />
                            <span
                                className={`block w-[22px] h-[2px] bg-black rounded transition-all duration-300
                ${isOpen ? "opacity-0 scale-x-0" : ""}`}
                            />
                            <span
                                className={`block w-[22px] h-[2px] bg-black rounded transition-all duration-300 origin-center
                ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                            />
                        </button>
                    </div>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
            </nav>

            {/* Mobile full-screen overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white/97 backdrop-blur-xl
        flex flex-col items-center justify-center gap-8
        transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        md:hidden`}
            >
                {navItems.map((item, i) => (
                    <a
                        key={item.label}
                        href={item.anchor}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-semibold text-gray-700 hover:text-black transition-all duration-300
              ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                        style={{ transitionDelay: isOpen ? `${i * 50 + 50}ms` : "0ms" }}
                    >
                        {item.label}
                    </a>
                ))}

                <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-green-400/70 to-transparent" />

                <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 text-base font-medium text-gray-500 hover:text-black
            border border-blue-950 rounded-full px-5 py-1.5 transition-all duration-300
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                    style={{ transitionDelay: isOpen ? "420ms" : "0ms" }}
                >
                    <Image src={globo} width={16} height={16} alt="idioma" />
                    Português
                </a>
            </div>
        </>
    );
};
