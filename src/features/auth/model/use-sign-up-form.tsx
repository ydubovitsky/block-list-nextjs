import { authControllerSignUp } from "@/shared/api/generated";
import { routes } from "@/shared/routes/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type FormType = {
  email: string;
  password: string;
};

export function useSignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormType>({});

  const signUpData = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(routes.HONE);
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpData.mutate(data)),
    isLoading: signUpData.isPending,
  }
}
