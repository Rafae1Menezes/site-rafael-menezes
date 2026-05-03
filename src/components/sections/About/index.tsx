import { Header } from "@/src/components/layout/Header";
import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import foto from "./foto.png";

export const AboutSection = async () => {
    const t = await getTranslations("about");

    return (
        <section id="about" aria-labelledby="about-heading" className="w-full scroll-mt-10 bg-[#FEFEFE] py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
                    <div className="w-full max-w-2xl text-center lg:text-left">
                        <Header title={t("title")} subtitle={t("subtitle")} headingId="about-heading" />

                        <div className="flex flex-col gap-5">
                            <p className="text-zinc-700">{t("p1")}</p>
                            <p className="text-zinc-700">{t("p2")}</p>
                            <p className="text-zinc-700">{t("p3")}</p>

                            <address className="not-italic">
                                <div className="flex items-center justify-center gap-2 lg:justify-start lg:gap-3">
                                    <MapPin size={32} aria-hidden="true" className="text-primary-700 shrink-0" />
                                    <div>
                                        <div className="text-primary-700 font-bold">{t("basedInBrazil")}</div>
                                        <div className="text-sm text-neutral-600 lg:text-left">
                                            <span className="sr-only">{t("locationLabel")}</span>
                                            Manhuaçu - MG
                                        </div>
                                    </div>
                                </div>
                            </address>
                        </div>
                    </div>

                    <div className="w-48 shrink-0 sm:w-64 lg:w-auto">
                        <Image src={foto} width={400} height={400} alt={t("photoAlt")} className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </div>
        </section>
    );
};
