import { routes } from "@/shared/routes/routes";
import { UIButton } from "@/shared/ui/ui-button";
import { UILink } from "@/shared/ui/ui-link";
import { UITextField } from "@/shared/ui/ui-text-field";
import clsx from "clsx";
import { useSignUpForm } from "../model/use-sign-up-form";

type SignUpFormProps = {
  className?: string;
};

export function SignUpForm({ className }: SignUpFormProps) {
  const { handleSubmit, isLoading, register } = useSignUpForm();

  return (
    <form
      className={clsx("flex flex-col gap-2", className)}
      onSubmit={handleSubmit}
    >
      <UITextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UITextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UIButton disabled={isLoading} variant="primary">
        Sign Up
      </UIButton>
      <UILink className="text-center" href={routes.SIGN_IN}>Sign In</UILink>
    </form>
  );
}
