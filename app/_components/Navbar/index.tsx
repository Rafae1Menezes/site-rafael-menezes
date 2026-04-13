"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
        anchor: "#career",
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
            <nav className="fixed top-0 right-0 left-0 z-50 w-full border-b border-white/30 bg-white/10 shadow-[0_8px_18px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <a href="#" className="text-black">
                            <span className="text-xl font-semibold">RAFAEL MENEZES</span>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden items-center gap-6 md:flex">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.anchor}
                                    className="highlight-link relative py-0.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="flex flex-row items-center gap-1 rounded-full border border-b-blue-950 px-3 py-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
                            >
                                <Image src={globo} width={15} height={15} alt="idioma" />
                                Português
                            </a>
                        </div>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
                            aria-label="Abrir menu"
                        >
                            <span
                                className={`block h-[2px] w-[22px] origin-center rounded bg-black transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
                            />
                            <span
                                className={`block h-[2px] w-[22px] rounded bg-black transition-all duration-300 ${isOpen ? "scale-x-0 opacity-0" : ""}`}
                            />
                            <span
                                className={`block h-[2px] w-[22px] origin-center rounded bg-black transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                            />
                        </button>
                    </div>
                </div>

                <div
                    className="h-[1px] w-full origin-center bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent blur-[0.5px]"
                    style={{ animation: "pulseLine 4s ease-in-out infinite" }}
                />
            </nav>

            {/* Mobile full-screen overlay */}
            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/97 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} md:hidden`}
            >
                {navItems.map((item, i) => (
                    <a
                        key={item.label}
                        href={item.anchor}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-semibold text-gray-700 transition-all duration-300 hover:text-black ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                        style={{ transitionDelay: isOpen ? `${i * 50 + 50}ms` : "0ms" }}
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 rounded-full border border-blue-950 px-5 py-1.5 text-base font-medium text-gray-500 transition-all duration-300 hover:text-black ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                    style={{ transitionDelay: isOpen ? "420ms" : "0ms" }}
                >
                    <Image src={globo} width={16} height={16} alt="idioma" />
                    Português
                </a>
            </div>
        </>
    );
};
