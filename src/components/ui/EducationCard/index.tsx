import { Calendar, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card } from "../Card";
import { Tag } from "../Tag";

type EducationEntry = {
    id: number;
    icon: React.ElementType;
    badge: string;
    title: string;
    institution: string;
    period: string;
    description: string;
};

export const EducationCard = async ({ entry }: { entry: EducationEntry }) => {
    const t = await getTranslations("education");

    const Icon = entry.icon;
    return (
        <Card classNames="transition-all duration-300 ease-out hover:-translate-y-1.5">
            {/* Bottom green accent bar */}
            <div className="absolute right-6 bottom-0 left-6 h-0.75 rounded-t-full bg-[#1a5c3a] opacity-0 transition-opacity duration-300" />

            {/* Top row: icon + badge */}
            <div className="mb-5 flex items-start justify-between">
                <div className="bg-primary-50 flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon size={20} className="text-primary-600" />
                </div>
                <Tag>{t(entry.badge)}</Tag>
            </div>

            {/* Title */}
            <h3 className="mb-4 text-lg leading-snug font-bold text-[#0d2b1e]">{t(entry.title)}</h3>

            {/* Meta */}
            <div className="mb-4 space-y-1.5">
                <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={13} className="shrink-0" />
                    <span className="text-sm font-medium">{entry.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={13} className="shrink-0" />
                    <span className="text-sm">{entry.period}</span>
                </div>
            </div>

            {/* Description */}
            <p className="mb-3 flex-1 text-sm leading-relaxed text-gray-500">{t(entry.description)}</p>
        </Card>
    );
};
