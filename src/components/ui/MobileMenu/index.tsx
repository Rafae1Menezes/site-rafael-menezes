"use client";
import { cn } from "@/src/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SwitchLanguage } from "../SwitchLanguage";

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

    const barBase = "h-[2px] w-[22px] bg-black transition-all duration-300";

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            >
                <span className={cn(barBase, isOpen && "translate-y-1.75 rotate-45")} />
                <span className={cn(barBase, isOpen && "opacity-0")} />
                <span className={cn(barBase, isOpen && "-translate-y-1.75 -rotate-45")} />
            </button>

            <div
                className={cn(
                    "fixed inset-0 z-40 flex h-dvh flex-col items-center justify-center gap-8",
                    "bg-white/97 backdrop-blur-xl",
                    "transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0",
                )}
            >
                {navItems.map((item, index) => (
                    <Link
                        key={item.label}
                        href={`/${locale}${item.anchor}`}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "text-2xl font-semibold text-gray-700",
                            "transition-all duration-300 ease-out hover:text-black",
                            isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                        )}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {t(item.label)}
                    </Link>
                ))}

                <SwitchLanguage />
            </div>
        </>
    );
};
