import { LINKS } from "@/content/links";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export const Footer = async () => {
    const locale = await getLocale();
    const year = new Date().getFullYear();
    const t = await getTranslations("links");

    return (
        <footer className="relative w-full border-t border-zinc-200 bg-zinc-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
                    <div className="flex flex-col items-center gap-0.5 sm:items-start">
                        <span className="text-sm font-semibold text-zinc-800">Rafael Menezes</span>
                        <span className="text-xs text-zinc-400">Senior Frontend Engineer · Tech Lead</span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
                        {LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={`/${locale}${link.anchor}`}
                                className="rounded-lg p-1 text-xs text-zinc-400 transition-colors hover:text-zinc-700"
                            >
                                {t(link.label)}
                            </Link>
                        ))}
                    </nav>

                    <p className="shrink-0 text-xs text-zinc-400">© {year}</p>
                </div>
            </div>
        </footer>
    );
};
