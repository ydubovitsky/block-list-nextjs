import { authControllerSignIn, authControllerSignUp } from "@/shared/api/generated";
import { routes } from "@/shared/routes/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type FormType = {
  email: string;
  password: string;
};

export function useSignInForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormType>({});

  const signInForm = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(routes.HONE);
    },
  });

  const errorMessage = signInForm.error ? "Sign in error" : undefined;

  return {
    register,
    handleSubmit: handleSubmit((data) => signInForm.mutate(data)),
    isLoading: signInForm.isPending,
    errorMessage: errorMessage
  }
}
