import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UITextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UITextField({
  className,
  error,
  label,
  inputProps,
}: UITextFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && <label htmlFor={id}></label>}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 outline-none px-2 h-10",
        )}
        type="text"
      />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
