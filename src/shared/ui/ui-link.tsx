import clsx from "clsx";
import Link from "next/link";

export type UILinkProps = {
  className?: string;
} & Parameters<typeof Link>[0];

export function UILink({ className, ...props }: UILinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-teal-500 cursor-pointer hover:text-teal-600",
      )}
    ></Link>
  );
}
