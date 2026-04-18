import { ArticleTag } from "@/app/types/article";
import { ProjectType } from "@/app/types/project";

export type Color = "default" | "blue" | "purple" | "red" | "amber" | "teal" | "green" | "zinc" | "pink";

export const colors: Record<Color, string> = {
    default: "bg-zinc-100 text-zinc-600",
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    red: "bg-red-50 text-red-700",
    amber: "bg-amber-50 text-amber-700",
    teal: "bg-teal-50 text-teal-700",
    green: "bg-green-50 text-green-700",
    zinc: "bg-zinc-100 text-zinc-700",
    pink: "bg-pink-50 text-pink-700",
};

export const projectColorMap: Record<ProjectType, Color> = {
    Fintech: "blue",
    "Design System": "purple",
    Security: "red",
    Tooling: "amber",
    Architecture: "teal",
    Optimization: "green",
    DevOps: "zinc",
    Product: "pink",
};

export const articleColorMap: Record<ArticleTag, Color> = {
    Architecture: "green",
    Performance: "amber",
    React: "blue",
    Security: "red",
    DX: "purple",
};
