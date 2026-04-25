import Image from "next/image";
import foto from "./foto.png";
import { Button } from "../../_components/Button";
import { Tag } from "@/app/_components/Tag";
import { getTranslations } from "next-intl/server";

export const HeroSection = async () => {
    const t = await getTranslations("hero");
    const tags = ["React", "TypeScript", "Fintech", t("performance"), t("security"), t("architecture")];

    return (
        <section id="start" className="flex min-h-screen w-full items-center bg-[#FEFEFE]">
            <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="order-1 flex w-full justify-center md:order-2 md:w-[65%] md:justify-end">
                        <div className="relative max-h-60 w-full max-w-[80vw] overflow-hidden md:max-h-full md:max-w-full">
                            <Image
                                src={foto}
                                width={700}
                                height={400}
                                alt="foto"
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="order-2 flex w-full flex-col gap-6 text-center md:order-1 md:w-[50%] md:text-left">
                        <h1 className="text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-bold tracking-tight text-zinc-900">
                            {t("seniorFrontend")}
                            <br />
                            <span className="highlight-word relative inline-block">{t("engineer")}</span>
                        </h1>

                        <p className="mx-auto max-w-lg text-[clamp(0.8rem,1.5vw,1rem)] leading-relaxed text-zinc-500 md:mx-0">
                            {t("description")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                            {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
                            <Button as="link" href="#my-work">
                                {t("viewMyWork")}
                            </Button>
                            <Button variant="primary">{t("downloadCV")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
