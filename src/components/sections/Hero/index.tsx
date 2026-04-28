import Image from "next/image";
import foto from "./foto2.png";
import { Button } from "../../ui/Button";
import { Tag } from "@/src/components/ui/Tag";
import { getLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/src/types/locale";

const cvMap = {
    pt: "cv-pt.pdf",
    en: "cv-en.pdf",
};

export const HeroSection = async () => {
    const t = await getTranslations("hero");
    const locale = (await getLocale()) as Locale;
    const tags = ["React", "TypeScript", "Fintech", t("performance"), t("security"), t("architecture")];

    return (
        <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#FEFDFD]">
            <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-0">
                    {/* TEXTO */}
                    <div className="relative z-10 order-2 flex flex-col gap-6 lg:order-1">
                        <h1 className="text-center text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-bold tracking-tight text-zinc-900 lg:text-left">
                            {t("seniorFrontend")}
                            <br />
                            <span className="highlightWord relative inline-block">{t("engineer")}</span>
                        </h1>

                        <p className="mx-auto max-w-lg text-center text-[clamp(0.8rem,1.5vw,1rem)] leading-relaxed text-zinc-500 lg:mx-0 lg:text-left">
                            {t("description")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                            {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
                            <Button as="link" href="#my-work" className="w-full sm:w-auto">
                                {t("viewMyWork")}
                            </Button>

                            <Button
                                as="link"
                                href={`/${cvMap[locale]}`}
                                variant="primary"
                                className="w-full sm:w-auto"
                                target="_blank"
                            >
                                {t("downloadCV")}
                            </Button>
                        </div>
                    </div>

                    {/* IMAGEM */}
                    <div className="relative z-0 order-1 flex justify-center lg:order-2 lg:justify-end">
                        <div className="relative flex w-full justify-center lg:block">
                            <Image
                                src={foto}
                                alt="Hero illustration"
                                priority
                                className="h-auto w-full max-w-sm sm:max-w-md lg:w-[120%] lg:max-w-none lg:-translate-x-10 xl:-translate-x-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
