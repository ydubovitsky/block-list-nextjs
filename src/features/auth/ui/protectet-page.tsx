import { useSessionQuery } from "@/entities/session/queries";
import { routes } from "@/shared/routes/routes";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {

    const router = useRouter();

    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <UIPageSpinner/>
    }

    if(isError) {
      router.replace(routes.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
