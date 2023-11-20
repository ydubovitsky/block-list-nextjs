import clsx from "clsx";
import {
  InputHTMLAttributes,
  PropsWithRef,
  SelectHTMLAttributes,
  useId,
} from "react";

export type UISelectOptions = {
  value: string;
  label: string;
};

export type UISelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  options?: UISelectOptions[];
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
};

export function UISelectField({
  className,
  error,
  label,
  options,
  selectProps,
}: UISelectFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && <label htmlFor={id}></label>}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 outline-none px-2 h-10",
        )}
      >
        {options?.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
