import { CAREER } from "@/content/career";
import { Header } from "@/src/components/layout/Header";
import { CareerCard } from "@/src/components/ui/CareerCard";
import { getTranslations } from "next-intl/server";

export const CareerSection = async () => {
    const t = await getTranslations("career");

    return (
        <section
            id="career"
            className="relative w-full scroll-mt-10 overflow-hidden bg-zinc-50 py-12 sm:scroll-mt-14 sm:pb-32.5"
        >
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full select-none">
                <defs>
                    <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-zinc-300" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title={t("title")} subtitle={t("subtitle")} />

                <div className="relative md:hidden">
                    <div className="absolute top-0 bottom-0 left-3 w-px bg-zinc-200" />

                    <div className="flex flex-col gap-6 pl-10">
                        {CAREER.map((entry) => (
                            <div key={entry.id} className="relative">
                                {/* dot */}
                                <div className="absolute top-5 -left-8 z-10 h-2.5 w-2.5 rounded-full border-2" />
                                <CareerCard entry={entry} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto hidden max-w-4xl md:block">
                    <div className="bg-secondary-400 absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2" />

                    {CAREER.map((entry, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={entry.id}
                                className={`-mb-17.5 flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div
                                    className={`flex w-[calc(50%-28px)] shrink-0 py-4 ${isLeft ? "justify-end" : "justify-start"}`}
                                >
                                    <CareerCard entry={entry} />
                                </div>
                                <div className="flex w-14 shrink-0 justify-center">
                                    <div className="bg-primary-300 border-primary-400 z-10 h-2.5 w-2.5 rounded-full border-2" />
                                </div>
                                <div className="w-[calc(50%-28px)] shrink-0" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
