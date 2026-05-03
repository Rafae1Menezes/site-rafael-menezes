"use client";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SwitchLanguage = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const targetLocale = locale === "pt" ? "en" : "pt";
    const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);
    const targetLabel = locale === "pt" ? "English" : "Português";

    return (
        <Link
            href={newPath}
            aria-label={`Mudar idioma para ${targetLabel}`}
            hrefLang={targetLocale}
            className="flex w-30 items-center justify-center gap-1 rounded-full border border-b-blue-950 bg-white/50 px-3 py-1 text-sm text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
            <Globe size={18} aria-hidden="true" />
            <span lang={targetLocale}>{targetLabel}</span>
        </Link>
    );
};
