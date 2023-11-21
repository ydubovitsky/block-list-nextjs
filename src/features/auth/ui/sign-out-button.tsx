import { UIButton } from "@/shared/ui/ui-button";
import { useSignOutButton } from "../model/use-sign-out-button";

export function SignOutButton() {
  const { isLoading, signOut } = useSignOutButton();

  return (
    <UIButton
      variant="outlined"
      onClick={() => signOut({})}
      disabled={isLoading ? true : false}
    >
      Sign out
    </UIButton>
  );
}
