import { Tag } from "@/src/components/ui/Tag";
import { Locale } from "@/src/types/locale";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "../../ui/Button";
import foto from "./foto.png";

const cvMap = {
    pt: "cv-pt.pdf",
    en: "cv-en.pdf",
};

export const HeroSection = async () => {
    const t = await getTranslations("hero");
    const locale = (await getLocale()) as Locale;
    const tags = ["React", "TypeScript", "Node", t("performance"), t("security"), t("architecture"), t("resilience")];

    return (
        <section
            aria-labelledby="hero-heading"
            className="relative flex min-h-dvh w-full items-center overflow-hidden bg-[#FEFDFD] pt-24 pb-30 sm:min-h-full lg:py-40"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:gap:10 grid grid-cols-1 items-center sm:gap-0 lg:grid-cols-[auto_1fr] lg:gap-0">
                    <div className="relative z-10 order-2 flex flex-col items-center gap-6 lg:order-1">
                        <div
                            aria-hidden="true"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/60 px-4 py-1.5 backdrop-blur-sm"
                        >
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="rounded-sm text-xs font-medium tracking-wide text-emerald-700 uppercase">
                                {t("position")}
                            </span>
                        </div>

                        <h1
                            id="hero-heading"
                            className="text-center text-4xl leading-tight font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
                        >
                            {t.rich("title", {
                                br: () => <br />,
                                highlight: (chunks) => <span className="text-emerald-600">{chunks}</span>,
                            })}
                        </h1>

                        <p className="max-w-130 text-center text-base leading-relaxed text-zinc-600 sm:text-lg">
                            {t("description")}
                        </p>

                        <ul aria-label={t("skillsLabel")} className="flex flex-wrap justify-center gap-2">
                            {tags.map((tag) => (
                                <li key={tag}>
                                    <Tag>{tag}</Tag>
                                </li>
                            ))}
                        </ul>

                        <div className="flex w-full flex-wrap items-center justify-center gap-3 pt-2 sm:pt-0">
                            <Button as="link" href="#my-work" className="w-full sm:w-50">
                                {t("viewMyWork")}
                                <ArrowRight size={20} aria-hidden="true" />
                            </Button>

                            <Button
                                as="link"
                                href={`/${cvMap[locale]}`}
                                variant="primary"
                                className="w-full sm:w-50"
                                target="_blank"
                                aria-label={t("downloadCVLabel")}
                            >
                                {t("downloadCV")}
                                <Download size={20} aria-hidden="true" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative z-0 order-1 flex justify-center lg:order-2 lg:justify-end">
                        <div className="relative flex w-full justify-center lg:block">
                            <Image
                                src={foto}
                                alt={t("photoAlt")}
                                className="hidden h-auto w-full max-w-sm sm:block sm:max-w-md lg:w-[120%] lg:max-w-none lg:-translate-x-10 xl:translate-x-0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-600"
            >
                <span className="text-xs tracking-widest uppercase">{t("scrollToExplore")}</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
        </section>
    );
};
