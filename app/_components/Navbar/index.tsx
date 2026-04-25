import { MobileMenu } from "../MobileMenu";
import Link from "next/link";
import { LINKS } from "@/content/links";
import { SwitchLanguage } from "../SwitchLanguage";
import { getLocale, getTranslations } from "next-intl/server";

export const Navbar = async () => {
    const locate = await getLocale();
    const t = await getTranslations("links");

    return (
        <>
            <nav className="fixed top-0 right-0 left-0 z-50 w-full border-b border-white/30 bg-white/10 shadow-[0_8px_18px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href={`/${locate}`} className="text-black">
                            <span className="text-xl font-semibold">RAFAEL MENEZES</span>
                        </Link>

                        {/* Desktop links */}
                        <div className="hidden items-center gap-6 md:flex">
                            {LINKS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={`/${locate}${item.anchor}`}
                                    className="highlight-link relative py-0.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
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
                    className="h-[1px] w-full origin-center bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent blur-[0.5px]"
                    style={{ animation: "pulseLine 4s ease-in-out infinite" }}
                />
            </nav>
        </>
    );
};
