export type TagColor = "default" | "blue" | "purple" | "red" | "amber" | "teal" | "green" | "zinc" | "pink";

type TagSize = "xs" | "sm" | "md";

interface TagProps {
    children: React.ReactNode;
    color?: TagColor;
    size?: TagSize;
    className?: string;
}

const baseStyles = "inline-flex items-center rounded-md font-medium";

const sizes: Record<TagSize, string> = {
    xs: "px-1.5 py-0.5 text-[10px]",
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1.5 text-sm",
};

const colors: Record<TagColor, string> = {
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

export function Tag({ children, color = "default", size = "sm", className = "" }: TagProps) {
    return <span className={`${baseStyles} ${sizes[size]} ${colors[color]} ${className}`}>{children}</span>;
}
