import { Zap } from "lucide-react";
import { Blocks } from "lucide-react";
import { Atom } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { UserStar } from "lucide-react";

export const Thumbnail = ({ tag }: { tag: string }) => {
    const bg: Record<string, string> = {
        Architecture: "bg-green-50",
        Performance: "bg-amber-50",
        React: "bg-blue-50",
        Security: "bg-red-50",
        DX: "bg-purple-50",
    };

    const icons: Record<string, React.ReactNode> = {
        Architecture: <Blocks className="text-green-600 opacity-60" />,
        Performance: <Zap className="text-amber-600 opacity-60" />,
        React: <Atom className="text-blue-600 opacity-60" />,
        Security: <ShieldCheck className="text-red-600 opacity-60" />,
        DX: <UserStar className="text-purple-600 opacity-60" />,
    };

    return (
        <div className={`flex h-10 w-14 flex-shrink-0 items-center justify-center rounded-md ${bg[tag] ?? "bg-zinc-100"}`}>
            {icons[tag]}
        </div>
    );
};
