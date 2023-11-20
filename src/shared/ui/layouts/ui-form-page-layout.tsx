import clsx from "clsx";
import { ReactNode } from "react";

export type UIFormPageLayoutProps = {
  header?: ReactNode;
  form?: ReactNode;
  title?: ReactNode;
  className?: string;
};

export function UIFormPageLayout({ header, form, title, className }: UIFormPageLayoutProps) {
  return (
    <div className={clsx("min-h-screen flex flex-col bg-slate-100", className)}>
    {header}
    <main className="grow flex flex-col pt-24">
      <div className="rounded-xl border border-slate-300 w-full px-14 max-w-[400px] py-8 self-center bg-white">
        <h1 className="text-2xl mb-10">{title}</h1>
        {form}
      </div>
    </main>
  </div>
  )
}
