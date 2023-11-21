import { useResetSession } from "@/entities/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { routes } from "@/shared/routes/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOutButton() {
  const router = useRouter();

  const resetSession = useResetSession();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(routes.SIGN_IN);
      resetSession();
    },
  });

  const isLoading = signOutMutation.isPending;

  return {
    isLoading: isLoading,
    signOut: signOutMutation.mutate
  }
}
