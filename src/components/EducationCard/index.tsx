import { Tag } from "../Tag";

type EducationEntry = {
    id: number;
    institution: string;
    degree: string;
    field: string;
    period: string;
    type: "graduation" | "postgrad";
};

const icons = {
    postgrad: (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
        </svg>
    ),
    graduation: (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="3" />
            <path d="M6.5 15.5C7.5 13.5 9.5 12 12 12s4.5 1.5 5.5 3.5" />
            <path d="M3 20h18" />
        </svg>
    ),
};

const typeLabel = {
    postgrad: "Pós-graduação",
    graduation: "Bacharelado",
};

export const EducationCard = ({ entry }: { entry: EducationEntry }) => (
    <div className="w-full max-w-sm rounded-2xl p-px">
        <div className="w-full rounded-2xl border border-zinc-200 bg-white p-4">
            {/* Icon + Tag */}
            <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-700">
                    {icons[entry.type]}
                </div>

                <Tag size="xs">{typeLabel[entry.type]}</Tag>
            </div>

            {/* Field */}
            <p className="mb-1 text-[15px] leading-snug font-bold text-zinc-900">{entry.field}</p>

            {/* Institution */}
            <p className="mb-0.5 text-[12px] text-zinc-400">{entry.institution}</p>

            {/* Period */}
            <p className="text-[11px] text-zinc-400">{entry.period}</p>
        </div>
    </div>
);
