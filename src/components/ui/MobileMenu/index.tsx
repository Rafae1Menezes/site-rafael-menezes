"use client";
import { cn } from "@/src/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { SwitchLanguage } from "../SwitchLanguage";

export const MobileMenu = ({ navItems }: { navItems: Array<{ label: string; anchor: string }> }) => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("links");
    const locale = useLocale();
    const menuId = useId();

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
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls={menuId}
                className="focus-visible:ring-primary-500 z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.25 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:hidden"
            >
                <span aria-hidden="true" className={cn(barBase, isOpen && "translate-y-1.75 rotate-45")} />
                <span aria-hidden="true" className={cn(barBase, isOpen && "opacity-0")} />
                <span aria-hidden="true" className={cn(barBase, isOpen && "-translate-y-1.75 -rotate-45")} />
            </button>

            <div
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                className={cn(
                    "fixed inset-0 z-40 flex h-dvh flex-col items-center justify-center gap-8",
                    "bg-white/97 backdrop-blur-xl",
                    "transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0",
                )}
            >
                <nav aria-label="Menu mobile">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.label}
                            href={`/${locale}${item.anchor}`}
                            onClick={() => setIsOpen(false)}
                            tabIndex={isOpen ? 0 : -1}
                            className={cn(
                                "block text-2xl font-semibold text-gray-700",
                                "transition-all duration-300 ease-out hover:text-black",
                                "focus-visible:ring-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                </nav>

                <SwitchLanguage />
            </div>
        </>
    );
};
