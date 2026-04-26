"use client";
import { useState, useEffect } from "react";
import { SwitchLanguage } from "../SwitchLanguage";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const MobileMenu = ({ navItems }: { navItems: Array<{ label: string; anchor: string }> }) => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("links");
    const locale = useLocale();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* Hamburger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            >
                <span className={`h-[2px] w-[22px] bg-black ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`${isOpen ? "opacity-0" : ""} h-[2px] w-[22px] bg-black`} />
                <span className={`h-[2px] w-[22px] bg-black ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 flex h-dvh flex-col items-center justify-center gap-8 bg-white/97 backdrop-blur-xl transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                } md:hidden`}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={`/${locale}${item.anchor}`}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-semibold text-gray-700 transition-all duration-300 hover:text-black ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                    >
                        {t(item.label)}
                    </Link>
                ))}

                <SwitchLanguage />
            </div>
        </>
    );
};
