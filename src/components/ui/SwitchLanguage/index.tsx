"use client";
import Image from "next/image";
import globo from "./globo.svg";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const SwitchLanguage = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const targetLocale = locale === "pt" ? "en" : "pt";
    const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

    return (
        <Link
            href={newPath}
            className="flex w-30 items-center justify-center gap-1 rounded-full border border-b-blue-950 px-3 py-1 text-sm text-gray-500"
        >
            <Image src={globo} width={15} height={15} alt="idioma" />
            {locale === "pt" ? "English" : "Português"}
        </Link>
    );
};
