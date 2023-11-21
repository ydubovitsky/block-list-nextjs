import { routes } from "@/shared/routes/routes";
import { UIButton } from "@/shared/ui/ui-button";
import { UILink } from "@/shared/ui/ui-link";
import { UITextField } from "@/shared/ui/ui-text-field";
import clsx from "clsx";
import { useSignInForm } from "../model/use-sign-in-form";

type SignInFormProps = {
  className?: string;
};

export function SignInForm({ className }: SignInFormProps) {
  const { handleSubmit, isLoading, errorMessage, register } = useSignInForm();

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
        Sign In
      </UIButton>
      <UILink className="text-center" href={routes.SIGN_UP}>
        Sign Up
      </UILink>
      {errorMessage && <div className="text-rose-500 text-center">{errorMessage}</div>}
    </form>
  );
}
