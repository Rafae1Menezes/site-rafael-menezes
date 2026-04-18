import Image from "next/image";
import globo from "./globo.svg";
import { MobileMenu } from "../MobileMenu";
import Link from "next/link";

const navItems = [
    {
        label: "Início",
        anchor: "/#start",
    },
    {
        label: "Meu trabalho",
        anchor: "/#my-work",
    },
    {
        label: "Artigos",
        anchor: "/#articles",
    },
    {
        label: "Carreira",
        anchor: "/#career",
    },
    {
        label: "Formação",
        anchor: "/#education",
    },
    {
        label: "Stack",
        anchor: "/#skills",
    },
    {
        label: "Contato",
        anchor: "/#contact",
    },
];

export const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 right-0 left-0 z-50 w-full border-b border-white/30 bg-white/10 shadow-[0_8px_18px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="text-black">
                            <span className="text-xl font-semibold">RAFAEL MENEZES</span>
                        </Link>

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
                                className="flex items-center gap-1 rounded-full border border-b-blue-950 px-3 py-1 text-sm text-gray-500"
                            >
                                <Image src={globo} width={15} height={15} alt="idioma" />
                                Português
                            </a>
                        </div>
                        {/* CLIENT PART */}
                        <MobileMenu navItems={navItems} />
                    </div>
                </div>

                <div
                    className="h-[1px] w-full origin-center bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent blur-[0.5px]"
                    style={{ animation: "pulseLine 4s ease-in-out infinite" }}
                />
            </nav>
        </>
    );
};
