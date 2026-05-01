import { FC } from "react";

type HeaderProp = {
    title: string;
    subtitle: string;
};

export const Header: FC<HeaderProp> = ({ title, subtitle }) => {
    return (
        <div className="mb-8">
            <p className="mb-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">{title}</p>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">{subtitle}</h2>
        </div>
    );
};
