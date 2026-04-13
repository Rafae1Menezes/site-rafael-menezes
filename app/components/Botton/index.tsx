import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "secondary",
  leadingIcon,
  trailingIcon,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const base =
    "cursor-pointer inline-flex items-center gap-2 font-medium rounded-lg text-[clamp(0.75rem,1.2vw,0.875rem)] px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed transition-[background-color,border-color,transform,box-shadow] duration-150 active:scale-[0.96] active:duration-75";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#B9F8BD] text-[#1a3d22] border border-[#88cf7b] border hover:bg-[#88d58e] hover:border-[#8ff097] active:bg-[#83d58d] active:border-[#6de876]",
    secondary:
      "bg-transparent text-zinc-700 border border-[#d1d5db] hover:bg-[#f7f7f7] hover:border-[##7e7e8a] hover:text-zinc-900 active:bg-zinc-100 ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {leadingIcon && (
        <span className="inline-flex items-center w-4 h-4 shrink-0">
          {leadingIcon}
        </span>
      )}
      {children}
      {trailingIcon && (
        <span className="inline-flex items-center w-4 h-4 shrink-0">
          {trailingIcon}
        </span>
      )}
    </button>
  );
};