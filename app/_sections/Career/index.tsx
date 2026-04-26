import { CareerCard } from "@/app/_components/CareerCard";
import { Header } from "@/app/_components/Header";
import { CAREER } from "@/content/career";

export const CareerSection = () => {
    return (
        <section id="career" className="relative w-full scroll-mt-14 overflow-hidden bg-zinc-50 py-12 sm:pb-[130px]">
            {/* Dot grid background */}
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full select-none">
                <defs>
                    <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-zinc-300" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Trajetória" subtitle="Carreira" />

                {/* ── MOBILE timeline: linha à esquerda, cards à direita ── */}
                <div className="relative md:hidden">
                    <div className="absolute top-0 bottom-0 left-3 w-px bg-zinc-200" />

                    <div className="flex flex-col gap-6 pl-10">
                        {CAREER.map((entry) => (
                            <div key={entry.id} className="relative">
                                {/* dot */}
                                <div className="absolute top-5 -left-8 z-10 h-2.5 w-2.5 rounded-full border-2 border-[#7FA885] bg-[#B9F8BD]" />
                                <CareerCard entry={entry} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── DESKTOP timeline: alternado esquerda/direita ── */}
                <div className="relative mx-auto hidden max-w-4xl md:block">
                    <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-zinc-200" />

                    {CAREER.map((entry, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={entry.id}
                                className={`mb-[-70px] flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div
                                    className={`flex w-[calc(50%-28px)] flex-shrink-0 py-4 ${isLeft ? "justify-end" : "justify-start"}`}
                                >
                                    <CareerCard entry={entry} />
                                </div>
                                <div className="flex w-14 flex-shrink-0 justify-center">
                                    <div className="z-10 h-2.5 w-2.5 rounded-full border-2 border-[#7FA885] bg-[#B9F8BD]" />
                                </div>
                                <div className="w-[calc(50%-28px)] flex-shrink-0" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
