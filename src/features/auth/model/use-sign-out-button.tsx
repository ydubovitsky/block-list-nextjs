import { authControllerSignOut } from "@/shared/api/generated";
import { routes } from "@/shared/routes/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOutButton() {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(routes.SIGN_IN);
    },
  });

  const isLoading = signOutMutation.isPending;

  return {
    isLoading: isLoading,
    signOut: signOutMutation.mutate
  }
}
