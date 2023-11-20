import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import clsx from "clsx";

type SignUpFormProps = {
  className?: string;
};

export function SignUpForm({ className }: SignUpFormProps) {
  return (
    <form className={clsx("flex flex-col gap-2", className)}>
      <UITextField label="Email" />
      <UITextField label="PAssword" />
      <UIButton variant="primary">Sign Up</UIButton>
    </form>
  );
}
