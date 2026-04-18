import { Header } from "@/app/_components/Header";
import { StackCard } from "@/app/_components/StackCard";
import { skillContent } from "@/content/stack";

export const StackSection = () => {
    return (
        <section id="stack" className="relative w-full scroll-mt-14 overflow-hidden bg-zinc-50 py-24">
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-50 select-none">
                <defs>
                    <pattern id="dot-grid-stack" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-zinc-300" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid-stack)" />
            </svg>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Tecnologias" subtitle="Stack" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillContent.map((group) => (
                        <StackCard key={group.category} group={group} />
                    ))}
                </div>
            </div>
        </section>
    );
};
