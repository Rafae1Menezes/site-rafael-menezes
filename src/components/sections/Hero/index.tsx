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
    const tags = ["React", "TypeScript", "Fintech", t("performance"), t("security"), t("architecture")];

    return (
        <section className="relative flex min-h-dvh w-full items-center overflow-hidden bg-[#FEFDFD] pt-24 pb-30 sm:min-h-full">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:gap:10 grid grid-cols-1 items-center sm:gap-0 lg:grid-cols-[auto_1fr] lg:gap-0">
                    <div className="relative z-10 order-2 flex flex-col items-center gap-6 lg:order-1">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/60 px-4 py-1.5 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                            <span className="rounded-sm text-xs font-medium tracking-wide text-emerald-700 uppercase">
                                Senior Software Engineer
                            </span>
                        </div>

                        <h1 className="text-center text-4xl leading-tight font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                            Building scalable <br />
                            digital experiences <br />
                            <span className="text-emerald-600">with impact.</span>
                        </h1>

                        <p className="max-w-130 text-center text-base leading-relaxed text-zinc-600 sm:text-lg">
                            I design and build high-performance web applications with clean code, solid architecture and
                            exceptional user experiences.
                        </p>

                        <div className="flex flex-wrap justify-center gap-2">
                            {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>

                        <div className="t flex w-full flex-wrap items-center justify-center gap-3 pt-2 sm:pt-0">
                            <Button as="link" href="#my-work" className="w-full sm:w-50">
                                {t("viewMyWork")}
                                <ArrowRight size={20} />
                            </Button>

                            <Button
                                as="link"
                                href={`/${cvMap[locale]}`}
                                variant="primary"
                                className="w-full sm:w-50"
                                target="_blank"
                            >
                                {t("downloadCV")}
                                <Download size={20} />
                            </Button>
                        </div>
                    </div>

                    <div className="relative z-0 order-1 flex justify-center lg:order-2 lg:justify-end">
                        <div className="relative flex w-full justify-center lg:block">
                            <Image
                                src={foto}
                                alt="Hero illustration"
                                priority
                                className="hidden h-auto w-full max-w-sm sm:block sm:max-w-md lg:w-[120%] lg:max-w-none lg:-translate-x-10 xl:translate-x-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
                <span className="text-xs tracking-widest text-gray-400 uppercase">Scroll to explore</span>
                <ChevronDown className="h-4 w-4 animate-bounce text-gray-500" />
            </div>
        </section>
    );
};
