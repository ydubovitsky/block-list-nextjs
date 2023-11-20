import clsx from "clsx";
import { UILogo } from "./ui-logo";
import { ReactNode } from "react";

type UIHeaderProps = {
  className?: string;
  content?: ReactNode;
};

export function UIHeader({ className, content }: UIHeaderProps) {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center",
        className,
      )}
    >
      <UILogo />
      {content}
    </header>
  );
}
