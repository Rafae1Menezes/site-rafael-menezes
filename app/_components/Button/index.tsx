import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonAsButton = {
    as?: "button";
    href?: never;
    target?: never;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

type ButtonAsLink = {
    as: "link";
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: never;
    type?: never;
};

type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    className?: string;
    disabled?: boolean;
} & (ButtonAsButton | ButtonAsLink);

export const Button = ({ children, variant = "secondary", className = "", disabled = false, ...props }: ButtonProps) => {
    const base =
        "cursor-pointer inline-flex items-center gap-2 font-medium rounded-lg text-[clamp(0.75rem,1.2vw,0.875rem)] px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed transition-[background-color,border-color,transform,box-shadow] duration-150 active:scale-[0.96] active:duration-75";

    const variants: Record<ButtonVariant, string> = {
        primary:
            "bg-[#B9F8BD] text-[#1a3d22] border border-[#88cf7b] hover:bg-[#88d58e] hover:border-[#8ff097] active:bg-[#83d58d] active:border-[#6de876]",
        secondary:
            "bg-transparent text-zinc-700 border border-[#d1d5db] hover:bg-[#f7f7f7] hover:border-[#7e7e8a] hover:text-zinc-900 active:bg-zinc-100",
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    if (props.as === "link") {
        return (
            <a
                href={props.href}
                target={props.target}
                rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                className={classes}
            >
                {children}
            </a>
        );
    }

    return (
        <button type={props.type ?? "button"} onClick={props.onClick} disabled={disabled} className={classes}>
            {children}
        </button>
    );
};
