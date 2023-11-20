import { authControllerSignUp } from "@/shared/api/generated";
import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { routes } from "@/shared/routes/routes";

type SignUpFormProps = {
  className?: string;
};

type FormType = {
  email: string;
  password: string;
};

export function SignUpForm({ className }: SignUpFormProps) {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormType>({});

  const signUpData = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(routes.HONE);
    },
  });

  return (
    <form
      className={clsx("flex flex-col gap-2", className)}
      onSubmit={handleSubmit((data) => signUpData.mutate(data))}
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
      <UIButton disabled={signUpData.isPending} variant="primary">
        Sign Up
      </UIButton>
    </form>
  );
}
