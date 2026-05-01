import { LINKS } from "@/content/links";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "../../ui/MobileMenu";
import { SwitchLanguage } from "../../ui/SwitchLanguage";
import logo from "./logo.svg";

export const Navbar = async () => {
    const locale = await getLocale();
    const t = await getTranslations("links");

    return (
        <>
            <nav className="fixed top-0 right-0 left-0 z-50 w-full border-b border-white/30 bg-white/60 shadow-[0_8px_18px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href={`/${locale}`} className="rounded-lg text-black">
                            <span className="flex items-center gap-1 text-xl font-semibold">
                                <Image src={logo} width={34} height={16} alt="logo" />
                                RAFAEL MENEZES
                            </span>
                        </Link>

                        {/* Desktop links */}
                        <div className="hidden items-center gap-4 md:flex">
                            {LINKS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={`/${locale}${item.anchor}`}
                                    className="highlightLink relative rounded-lg py-0.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
                                >
                                    {t(item.label)}
                                </Link>
                            ))}

                            <SwitchLanguage />
                        </div>
                        {/* CLIENT PART */}
                        <MobileMenu navItems={LINKS} />
                    </div>
                </div>

                <div
                    className="h-0.5 w-full origin-center bg-linear-to-r from-transparent via-emerald-400/80 to-transparent blur-[0.5px]"
                    style={{ animation: "pulseLine 4s ease-in-out infinite" }}
                />
            </nav>
        </>
    );
};
