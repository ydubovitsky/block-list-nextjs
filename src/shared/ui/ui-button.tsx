import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export type UIButtonProps = {
  variant: "primary" | "secondary" | "outlined";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UIButton({ className, variant, ...props }: UIButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 py-2 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
          primary: "text-white bg-teal-500 shadow shadow-teal-500-500/30 disabled:opacity-50 hover:bg-teal-600",
          secondary: "text-white bg-rose-500 shadow shadow-rose-500-500/30 disabled:opacity-50 hover:bg-rose-600",
          outlined: "border border-slate-300 shadow shadow-slate-500-500/30 disabled:opacity-50",
        }[variant],
      )}
    ></button>
  );
}
